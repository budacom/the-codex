# Transacciones y Locks

Las transacciones y los locks se usan para coordinar el acceso y la modificación de los datos en la BD.

## Qué son las transacciones

En general se usa una transacción para que varios cambios a la base de datos sean aplicados en forma atómica desde el punto de vista de otras conexiones que están mirando la BD.

Las transacciones además permiten que un set de cambios no se aplique en caso de un error en medio de la transacción.

Por ejemplo:

```ruby
rpo = ReservedPriceOrder.create! params
log rpo
ReservedPriceOrderConfirmJob.perform_later(rpo) # suponiendo que estamos usando delayed job, que usa la DB como backend
```

El caso anterior no garantiza que si se crea la RPO se encole también el job. Si, por ejemplo, la llamada a `log` fallara con una excepción, o si durante la ejecución de `log` se cae el proceso por exceso de uso de memoria, rpo se habría creado pero el `ReservedPriceOrderConfirmJob` nunca se llamaría.

Viendo el mismo caso, pero usando una transacción:

```ruby
ActiveRecord::Base.transaction do
    rpo = ReservedPriceOrder.create! params
    log rpo
    ReservedPriceOrderConfirmJob.perform_later(rpo)
end
```

Ahora si falla la llamada a `log`, se hace rollback de toda la transacción, por lo que la rpo creada finalmente no es persistida (y nunca es visible por otros procesos).

### Cuando usarlas?

En general, si se va a hacer más de un cambio en la BD que piensas que deberían ir 'juntos', usa una transacción.

## Que son los locks

Los locks permiten coordinar el acceso a un recurso, cuando se tiene la posibilidad de que varios procesos traten de modificar el mismo recurso al mismo tiempo.

Por ejemplo:

```ruby
rpo = ReservedPriceOrder.find 2
if rpo.may_approve?
    do_something_dangerous # ej: transferir dinero a un usuario
    rpo.approve!
end
```

Si dos procesos (colas de jobs o llamadas al API por ejemplo), corren el mismo código en forma paralela, podría pasar que ambos lean desde la BD el estado de la RPO #2 antes que el otro lo cambie, y que por lo tanto los dos accedan a `do_something_dangerous`.

La solución de esto es utilizar un lock sobre la fila cuyo estado queremos modificar:

```ruby
ActiveRecord::Base.transaction do
    rpo = ReservedPriceOrder.lock.find 2 # aqui espera hasta que terminen otras transacciones que tomaron el lock de #2
    if rpo.may_approve?
        do_something_dangerous
        rpo.approve!
    end
end # aqui se libera el lock tomado anteriormente
```

Existe otra manera para lograr lo mismo que el código anterior, pero un poco menos eficiente:

```ruby
rpo = ReservedPriceOrder.find 2 # trae los datos de la fila #2
rpo.with_lock do # inicia la transacción y a continuación toma el lock utilizando el id del objeto, cargando nuevamente los datos del objeto y pisando los datos traidos en la consulta anterior.
    if rpo.may_approve?
        do_something_dangerous
        rpo.approve!
    end
end
```

### Cuando usarlos?

Cuando quiero coordinar modificaciones a un objeto desde varios procesos.

#### Rerefencias

https://api.rubyonrails.org/classes/ActiveRecord/Transactions/ClassMethods.html
https://api.rubyonrails.org/classes/ActiveRecord/Locking/Pessimistic.html



