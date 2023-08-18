# Guía de testing en front

Para testear nuestras aplicaciones frontend (web y móvil) usamos una serie de librerías externas que cumplen variadas funciones. Algunas de las principales son:

- [Jest](https://jestjs.io/): un framework de testing para aplicaciones en JS. A grandes rasgos hace lo mismo que hace [RSpec](https://rspec.info/) en el backend. Nos ayuda a:
    - Estructurar nuestros casos de test usando `it` y `describe`.
    - Configurar las condiciones necesarias para cada test usando funciones como `beforeEach`.
    - Evaluar cada caso de test usando `expect`.
    - Hacer mocks de dependencias usando `jest.mock`.
    - Crear tests de snapshots.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (`@testing-library/react`): una librería hecha específicamente para testear componentes React. Es parte de [Testing Library](https://testing-library.com/), un conjunto de librerías para testear componentes UI de una variedad de frameworks. Te recomendamos revisar la documentación de ambas. Esta librería nos ayuda a:
    - Renderizar nuestro componente dentro del test usando `render`, y luego encontrar elementos visuales (por ejemplo para probar que existen) usando queries como `getByText`, `findByTestId`, etc.
    - Interactuar con los componentes dentro del test usando funciones como `fireEvent.click`.
    - Esperar a que se cumplan condiciones asíncronas con `waitFor`.
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) (`@testing-library/react-native`): una librería hecha específicamente para testear componentes en React Native. Si bien no es parte de Testing Library, está basada en ésta y cumple una función muy similar. Se usa en la app móvil.
- [React Hooks Testing Library](https://react-hooks-testing-library.com/) (`@testing-library/react-hooks`): una librería hecha específicamente para testear hooks (no componentes) de React. Nos ayuda a:
    - Instanciar hooks con `renderHook` y luego acceder a su valor retornado usando `.result`
- [MSW](https://mswjs.io/): una librería para hacer mocks de requests tanto en ambiente de test como desarrollo, pudiendo definir su contenido y replicando condiciones reales como la latencia de respuesta. Para aprender más puedes ir a la guía [Mocks de API calls con MSW](api-mocks).
- [Fishery](https://github.com/thoughtbot/fishery): una librería para generar objetos para mocks. A grandes rasgos hace lo mismo que hace `factory_bot` en el backend. Nos ayuda a:
    - Definir una factory con `Factory.define`. Luego con la factory retornada usamos `.build` para crear una instancia.
