# RabbitMQ

Rabbit es un broker de mensajes que permite construir distintos esquemas de comunicación tipo pub-sub.

## Como lo usamos en Buda

Rabbit se usa principalmente para comunicar eventos desde nuestra aplicaciones de backend como patabit o investments a surbtc, desde donde se despachan notificaciones a los usuarios (emails, push, websockets, etc).

Actualmente tenemos 4 colas de mensajes distintas:
- `patabit.events`: eventos genéricos generados por patabit
- `investments.events`: eventos genéricos generados por investments
- `loans.events`: eventos genéricos generados por loans
- `patabit.realtime`: eventos generados por patabit en la cola de trading, deben ser consumidos en el orden en que son publicados.

## Como se ve en el código cuando queremos publicar eventos

Utilizamos la gema `bunny`

https://github.com/ruby-amqp/bunny

Luego incluimos el siguiente módulo en el proyecto

```ruby
module EventPublishUtils
  extend self

  def publish(data, routing_key = 'events')
    exchange.publish(data, routing_key: routing_key, persistent: true)
  end

  def exchange
    Thread.current[:pub_exchange] ||= channel.direct("patabit.events", passive: true)
  end

  def channel
    # sharing channels between threads is not recommended
    Thread.current[:pub_channel] ||= connection.create_channel
  end

  def connection
    @connection ||= Bunny.new(
      host: ENV.fetch('RABBIT_HOST', 'rabbitmq'),
      vhost: ENV.fetch('RABBIT_VHOST'),
      port: ENV.fetch('RABBIT_PORT'),
      username: ENV.fetch('RABBIT_USERNAME'),
      password: ENV.fetch('RABBIT_PASSWORD'),
      connection_name: "patabit/#{ENV.fetch('HOSTNAME', '')}"
    ).start
  end
end
```

Como se puede ver en el método `exchange`, estamos usando el modo 'pasivo', lo que significa que la topografía de exchange, bindings y colas está definida a nivel de schema en la infraestructura. Por lo que cuando se agrega un nuevo elemento, es importante que se haga a nivel de infra y no en el código.

### Referencias de infrastructura

https://github.com/budacom/k8s-gitops/tree/master/clusters/apps-prod/patabit-engine
https://github.com/budacom/surbtc-infra/tree/master/services/rabbitmq

## Como se ve en el código cuando queremos consumir eventos

[WIP]

## Cuando usarlo?

Cuando quiero empujar un evento que quiero que otra aplicación consuma. 

Por ahora no hay una garantía 'estricta' de que los mensajes enviados por rabbit vayan a alcanzar a su destinatario, para este tipo de garantías prefiere usar una llamada al API de la otra aplicación directamente.
