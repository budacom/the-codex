# Modelos Rails

## Consideraciones

- Todos los modelos deben heredar de `ApplicationRecord`

### AASM

Utilizamos AASM para máquinas de estado en nuestro modelos, en general sobre el atributo `state`.
Utilizamos `whiny_persistence: true`. Esto hace que se levante una excepción cuando falla una transición.

### Anotaciones

Utilizamos `rake annotate_models` para actualizar las anotaciones del modelo después de una migración. Es importante que los PR que incluyan migraciones incluyan también anotaciones actualizadas.

### Callbacks

- Preferir callbacks en métodos y no inline
- La implementación de los callbacks debería ser en un método privado.
- Callbacks de efectos 'secundarios' deberían ir en Observers

### Concerns

Los concerns permiten definir métodos y atributos de un modelo en un módulo separado, para poder asi reusarlo o distribuir el código. En nuestros modelos usamos concerns de dos maneras:

1. Para reutilizar un comportamiento en varios modelos

```ruby
module Removable
  extend ActiveSupport::Concern

  class_methods do
    def remove_all
        update_all(removed_at: Time.current)
    end
  end

  included do
    def removed?
        removed_at.present?
    end
  end
end
```

2. Para encapsular comportamientos de un modelo y asi separarlo en varios archivos más pequeños.

```ruby
# Falta definir namespacing

module Removable
  extend ActiveSupport::Concern

  class_methods do
    def remove_all
        update_all(removed_at: Time.current)
    end
  end

  included do
    def removed?
        removed_at.present?
    end
  end
end
```

## Orden de las secciones

Los modelos deberían seguir 

```ruby
class Modelo < ApplicationRecord
    ## 1. Includes
    include AASM

    ## 2. Constantes
    STATE_REASONS = {
        first_deposit_retention: "First deposit retention",
      }

    ## 3.1 Attributos - asociaciones
    belongs_to :account

    ## 3.2 Attributos - serializables
    serialize :lista, Array

    ## 3.3 Attributos - money
    monetize :amount_cents

    ## 3.4 Atributos - AASM
    aasm column: :state, whiny_persistence: true do
        state :confirming
        state :rejecting
        state :retaining
    end

    # 4.1 Validaciones builtin
    validates :foo, :bar, presence: true
    validates :foo, numericality: { greater_than: 0 }

    # 4.2 Validaciones custom

    # 5. Callbacks
    after_save :do_something

    # 6. Scopes
    scope :confirmed_or_rejected, where(state: ['confirmed', 'rejected'])

    # 7.1 Métodos públicos de clase

    def self.confirm_all; end

    # 7.2 Métodos públicos de instancia

    def update_amount; end

    # 7.3 Métodos privados

    private

    def do_something; end

    # 9. Anotaciones
      # == Schema Information
      #
      # Table name: deposits
      #
      #  id                    :integer         primary key
      #  state                 :string(255)
end
```
