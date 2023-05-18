# Interacción entre React y Angular

Si bien nos encontramos en una migración desde Angular a React, a veces, es necesario hacer que estos interactúen, en esta guía podrás encontrar ejemplos de uso para los casos más comunes


## Ejecutar código de angular desde React

Para este caso, digamos que necesitamos ocultar un componente de angular desde React


```jsx title="app/assets/javascripts/surBTC/controllers/portfolio_controller.js"
 // ...
Controller.$inject = [
     // ...
    'reactAngularService',

  ];
  function Controller(
     // ...
    reactAngular
  ) { 

    // Definimos una variable que permita ocultar la vista de angular
     vm.showBalance = true;

    // Creamos una función que permite cambiar el valor de la función
    vm.toggleShowBalance = function (showBalance) {
      vm.showBalance =
        showBalance === undefined ? !vm.showBalance : showBalance;
    };

    // Compartimos la función con react
    reactAngular.shareFunction(
      'portfolio.toggleShowBalance',
      vm.toggleShowBalance
    );
    //...

```


```tsx title="app/react/features/portfolio/components/NewUsersInstructions.tsx"

import { reactAngular } from '@/shared/utils/reactAngular';

const NewUsersInstructions = (props: Props) => {

// Cuando el usuario presiona el botón, le pedimos a angular que muestre el balanace
 const hideBanner = () => {
    reactAngular('portfolio.toggleShowBalance', [true]);
  };

//  por defecto, el balance se oculta
  reactAngular('portfolio.toggleShowBalance', [false]);
  return (<div>
     <Button onClick={hideBanner} variant="primary-outlined" className="w-full md:w-1/2">
            {I18n.t('portfolio.new_user_instructions.deposit_later')}
          </Button>
        </div>)
}

```


Definimos el tipo 

```tsx title="app/react/shared/utils/reactAngular.ts"

// ...
type reactAngularServiceTypes = {
    // ...
      'portfolio.toggleShowBalance': (value: boolean) => void;
}
```

## Ejecutar código de React desde angular

A veces, vamos a necesitar ejecutar código de React en algún componente de angular, si bien esto también es posible de realizar, es un poco más complejo, dado que vamos a aprovecharnos del ejemplo anterior, para guardar la referencia a una función de React dentro de angular.



En este ejemplo, necesitamos mostrar un modal de React cuando el usuario presiona un botón, y además recibe un valor (safeProcessAttemptId) que utilizara para desarrollar el resto de su lógica

### Definimos la función a compartir

```tsx title="app/react/features/safe_process_attempts/pages/WaitingForApproval.tsx"

import { reactAngular, setOnModalHiddenCallbackFunction } from '@/shared/utils/reactAngular';


export const WaitingForApproval = () => {
  const [shouldShow, setShouldShow] = useState(false);

  // 1
  const sharedFunctionCallback = useRef<setOnModalHiddenCallbackFunction>();

  useEffect(() => {
    sharedFunctionCallback.current = ({ visible, safeProcessAttemptId }) => {
      setShouldShow(visible);
      if (safeProcessAttemptId) setSafeProcessId(safeProcessAttemptId);
    };

    // 2
    reactAngular('safeProcessAttempts.setOnModalHiddenCallback', [sharedFunctionCallback.current]);
  }, [setSafeProcessId]);

  if(!shouldShow) return null;
  return (<div>the modal</div>);
  
}
```

En 1, definimos una referencia a la función que compartiremos para permitir que se mantenga constante entre ejecuciones

En 2, compartimos esta función con angular

Además, es necesario definir el tipo de la función a compartir


```tsx title="app/react/shared/utils/reactAngular.ts"

//...
type SafeProcessModalCallbackArgs = {
  visible: boolean;
  safeProcessAttemptId?: string;
};
export type setOnModalHiddenCallbackFunction = ({
  visible,
  safeProcessAttemptId,
}: SafeProcessModalCallbackArgs) => void;

type reactAngularServiceTypes = {
    // ...
    'safeProcessAttempts.setOnModalHiddenCallback': (
    callback: setOnModalHiddenCallbackFunction,
  ) => void;
    // ...
}

```

A continuación, es necesario editar el controlador de angular desde el cual llamaremos a la función


```jsx title="app/assets/javascripts/surBTC/controllers/new_withdrawal_controller.js" showLineNumbers


// Pasamos $window y reactAngularService al controlador
(function () {
    // ...
    '$window',
    'reactAngularService',
    // ... 
}

// ...


    function Controller(
        // ...
        $window,
        reactAngular
        // ...
    ) {
        // helper donde guardaremos la config del bridge
        vm.reactAngularBridge = {
        callback: null,
        // Recibe el callback que definimos en react y lo guardam en una variable
        setCallback: function (callback) {
            vm.reactAngularBridge.callback = callback;
        },
        // función para hacer trigger del callback en un futuro
        triggerCallback: function (value) {
            if (typeof vm.reactAngularBridge.callback === 'function') {
            vm.reactAngularBridge.callback(value);
            }
        },
        };
        vm.requiresSafeProcessAttempt = false;

        // Compartimos la función con react 
        reactAngular.shareFunction(
        'safeProcessAttempts.setOnModalHiddenCallback',
        reactAngularBridge.setCallback
        );

        // Luego de ejecutar alguna logica, llamamos a la función

        reactAngularBridge.triggerCallback(
            {
            visible: true,
            safeProcessAttemptId: 1
            }
        );

    }
)

```
