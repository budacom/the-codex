---
sidebar_position: 2
---

# Mocks de API calls con MSW

Para los mocks de API calls utilizamos la librería [Mock Service Worker](https://mswjs.io/), que nos permite hacer
mocks de requests de manera universal, interceptando el request sin importar la librería que usemos para enviarlo. 

Además de mocks de requests para el ambiente de test, MSW también nos permite hacer mocks de requests en nuestro ambiente local de desarrollo, lo cual puede ser útil para navegar el sitio sin tener que levantar todos los servicios del backend.

## Guía rápida 🏃‍♂️

### Definir un handler 🎯 {#define-handler}

Para añadir un mock de un request debes definir un handler usando la función `rest.get` o alguna otra dependiendo del método utilizado. Por ejemplo, el siguiente ejemplo hace que cualquier request a `/api/v2/user_metadata` retorne el valor indicado en la función `ctx.json`:

```js title="userMetadata.js"
import { rest } from "msw";

export function mockUserMetadata() {
  return rest.get('/api/v2/user_metadata', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user_metadata: {
          value: '{"count":3}',
        },
      }),
    );
  });
}
```

Se recomienda dejar los mocks de requests en el mismo directorio y contar con un mismo archivo desde donde exportar todos nuestros request handlers.
- En surbtc definimos los mocks en la carpeta [`spec/_javascript/react/mocks/handlers`](https://github.com/budacom/surbtc/tree/master/spec/_javascript/react/mocks/handlers) y los exponemos desde el archivo [`spec/_javascript/react/mocks/handlers.js`](https://github.com/budacom/surbtc/blob/master/spec/_javascript/react/mocks/handlers.js).
- En buda-expo definimos los mocks en la carpeta [`src/mocks`](https://github.com/budacom/buda-expo/blob/master/src/mocks/handlers.js).

Por lo tanto, luego de definir el handler deberás exportarlo desde el archivo correspondiente de la siguiente manera:

```js title="handlers.js"
import { mockUserMetadata } from './handlers/userMetadata';

export const handlers = [
  mockUserMetadata(),
];
```



Para más detalles sobre `rest.get` y las equivalentes funciones para otros métodos, recomendamos leer [la documentación de MSW](https://mswjs.io/docs/api/rest).



### Activar MSW en tests 🧪

Podrás activar el mock definido usando `server.use` desde cualquier componente que use el request. Siguiendo el ejemplo:

```js title="path/to/myTest.spec.js"
import server from 'example/path/to/server';
import { mockUserMetadata } from 'example/path/to/userMetadata';

beforeEach(() => {
  server.use(mockUserMetadata());
});
```

En surbtc definimos `server` en `spec/_javascript/react/mocks/server.js`. En buda-expo lo definimos en `src/mocks/server.js`.

### Activar MSW en ambiente de desarrollo 💻

En surbtc la librería está configurada para activarse en el ambiente de desarrollo definiendo la siguiente variable de entorno:

```env title=".env.local"
MOCK_REQUESTS=true
```

Al agregar esta variable podrás navegar por el sitio usando los mocks que tenemos definidos. Tal como cuando se hacen requests de verdad, podrás ver los requests y respuestas en la pestaña Network de las dev tools del navegador. 


## Ejemplo en detalle 🔍

Digamos que tenemos un componente `<NewsBanner />` con un mensaje que ve el usuario al ingresar
al sitio web que se debe presentar hasta un máximo de 3 veces, y este valor está dado por un request al endpoint `/user_metadata`:

```tsx title="src/features/news-banner/index.tsx"
const NewsBanner = () => {
  // aquí enviamos un request a /user_metadata
  // y retornamos null si el valor recibido es mayor a 3
  return (
    <div
      testID="news-banner"
    >
      // ...
    </div>
  );
};
```

Entonces para poder testear este componente o usarlo en local podemos construir un mock como [el que definimos antes](#define-handler).

### Esperar respuesta


Si quieres utilizar la respuesta del request [previamente definido en el handler](#define-handler)
y así validar algún cambio en el DOM, sólo es necesario esperar que se renderice el componente:

```js title="src/features/news-banner/__tests__/index.spec.js"
describe("NewsBanner", () => {
  it("displays when flag is active and user has seen the banner less than 3 times", async () => {
    const { getByTestId } = renderComponent();

    await findByTestId("news-banner");

    expect(getByTestId("news-banner")).toBeTruthy();
  });
});
```

### Sobreescribir respuesta

Si quieres sobrescribir la respuesta del request definida en el archivo `handlers.js`, puedes volver a definirla al llamar a `server.use`.

```js title="src/features/news-banner/__tests__/index.spec.js"
describe("NewsBanner", () => {
  context("when the user has seen the banner more than 3 times", async () => {
    server.use(
      rest.get('/api/v2/user_metadata', (req, res, ctx) =>
        res(
          ctx.json({
            user_metadata: {
              value: '{"count":4}',
            },
          })
        )
      )
    );
  });
});
```

En buda-expo tenemos definido el helper [`overrideValue`](https://github.com/budacom/buda-expo/blob/master/src/mocks/helpers.jsx) que se encarga de llamar a `server.use` con los parámetros correspondientes.
