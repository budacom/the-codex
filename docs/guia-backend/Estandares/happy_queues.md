# Happy queues

## Descripción

Happy queues es el estándar que usamos para garantizar que nuestros jobs sean ejecutados a tiempo. 

Para lograr esto tenemos 4 colas cuyos nombres nos indican cuanto tiempo puede tardar un job en comenzar a ejecutarse antes de que se considere como 'atrasado'.

- `within_1_minute`
- `within_10_minutes`
- `within_1_hour`
- `within_24_hours`

* Se pueden agregar nuevas colas si se considera que faltan categorías, pero se recomienda trabajar con las antes mencionadas.

## Cómo determino en qué cola corro mi Job?

A la diferencia entre el tiempo en el que el job debiera comenzar a ejecutarse y efectivamente se comenzó a ejecutar le llamaremos latencia. 

Para elegir la cola más apropiada para un nuevo job hay que pensar en cuánta latencia podemos tolerar antes de que sea un problema. De acuerdo a eso se eligirá la cola con mayor latencia entre las que garanticen la latencia deseada.

Por ejemplo, si tuviéramos un Job que procesa abonos y como Buda le decimos a los usuarios que todos los abonos se verán reflejados en menos de 15 minutos la cola 
apropiada para ejecutar este Job probablemente será `within_10_minutes`.

## Garantías y restricciones

Las colas usan mecanismos de autoscaling en base a la latencia para que se garanticen las ejecuciones de jobs a tiempo.

Si se quisieran ejecutar jobs lentos en colas rápidas, relativas al job, sería un problema para el estándar, de manera que fijamos la restricción de no poder agregar a colas jobs que se ejecuten en más de un décimo de su latencia garantizada. Por ejemplo, si un job corre en promedio en 8 minutos y se quisiera que corra en la cola `within_10_minutes` comenzará a atrasar el resto de los jobs por lo que se deberá optimizar para que se ejecute en menos de 1 minuto o moverlo a la cola `within_1_hour`.

## [WIP] Qué pasa si necesito que mis jobs corran en forma serial?

Hay casos donde es necesario que varios jobs corran uno después de otro, para asegurar acceso exclusivo a un recurso en particular.

Para esto es necesario definir una cola específica, y asegurarnos que el worker que consuma esta cola no escalará a más de una instancia.

Para esto tenemos colas llamadas `serial_xx`