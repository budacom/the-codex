---
sidebar_position: 2
---

# Mocks de API calls

Para los mocks de API calls utilizamos la librería [Mock Service Worker](https://mswjs.io/) que nos permite hacer
mocks de manera universal, que por una parte elimina la necesidad de tener que utilizar un mock para cada librería
de request que tengamos y también simplifica la configuración.

## Ejemplo de uso 🔍

En nuestro ejemplo tenemos un componente `<NewsBanner />` que representa un banner que ve el usuario al ingresar
al sitio web y tiene un botón para cerrarlo o para dirigirnos a otra vista. Este componente debe ser presentado
hasta un máximo de 3 veces al usuario:

```tsx title="src/features/news-banner/index.tsx"
const NewsBanner = () => {
  // ...
  return (
    <div>
      // ...
      <Button
        // ...
        onPress={...}
        testID="news-banner-close"
      />
      <Button
        // ...
        onPress={...}
        testID="news-banner-yes"
      />
    </div>
  );
};
```

### Definición de un mock 🎯

Se recomienda dejar los mocks de requests en el mismo directorio, en nuestro caso `src/mocks`. Y asimismo, contar con un
archivo donde tener todos nuestros request handlers, en nuestro caso `src/mocks/handlers.js`.

► **Request handlers**

Para el caso de api REST podemos simular cualquier tipo de request `rest`: `get`, `post`, `put`, `patch` o `delete`.
Al mockear estas requests podremos capturar cualquier solicitud y especificar qué respuesta devolver.

```js title="src/mocks/handlers.js"
// highlight-start
import { rest } from "msw";
// highlight-end

export const handlers = [
  // Handles a POST /login request
  // highlight-start
  rest.post("/login", null),
  // highlight-end
];
```

► **Response resolver**

Para manejar una request capturada, especificamos una response simulada mediante una función. La función que resuelve
la response puede recibir los siguientes argumentos:

- `req`, información del request: `get`, `post`, etc.,
- `res`, para crear el mock de la response,
- `ctx`, un conjunto de funciones para setear: `status`, `headers`, `body`, etc. del mock de la respuesta.

```js title="src/mocks/handlers.js"
import { apiBaseUrl } from "@/values/api";
// highlight-start
import { rest } from "msw";
// highlight-end

export const handlers = [
  // Handles a GET /user_metadata request
  // highlight-start
  rest.get(`${apiBaseUrl}/user_metadata`, (req, res, ctx) =>
    res(
      ctx.json({
        user_metadata: {
          value: '{"count":2}',
        },
      })
    )
  ),
  // highlight-end
];
```

### Uso del mock 📝

Si queremos utilizar la respuesta del request previamente definido en `src/mocks/handlers.js`
y así validar algún cambio en el DOM, sólo es necesario esperar que se renderize el componente
con `waitFor`:

```js title="src/features/news-banner/__tests__/index.spec.js"
// ...

const renderComponent = () =>
  render(
    <MockRest>
      <NewsBanner />
    </MockRest>
  );

describe("NewsBanner", () => {
  it("displays when flag is active and user has seen the banner less than 3 times", async () => {
    const { getByTestId } = renderComponent();

    // highlight-start
    await waitFor(() => getByTestId("news-banner"));

    expect(getByTestId("news-banner")).toBeTruthy();
    // highlight-end
  });
});
```

Por otra parte, si queremos sobrescribir la respuesta del request lo podemos hacer utilizando
`server.use`. Se sugiere, que vaya acompañada de la función `waitForRequest` para
esperar la respuesta del request y así validar algún cambio en el DOM:

```js title="src/features/news-banner/__tests__/index.spec.js"
// ...

const renderComponent = () =>
  render(
    <MockRest>
      <NewsBanner />
    </MockRest>
  );

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe("NewsBanner", () => {
  it("does not shows when the user has seen the banner more than 3 times", async () => {
    // highlight-start
    server.use(
      rest.get(`${apiBaseUrl}/user_metadata`, (req, res, ctx) =>
        res(
          ctx.json({
            user_metadata: {
              value: '{"count":3}',
            },
          })
        )
      )
    );
    // highlight-end

    const { queryByTestId } = renderComponent();

    // highlight-start
    await act(async () => {
      await waitForRequest("GET", "/user_metadata");
      await sleep(100);
    });

    expect(queryByTestId("news-banner")).toBeNull();
    // highlight-end
  });
});
```

:::info
Al sobreescribir `rest.get` utilizando `server.use`, lo que hacemos es sobreescribir la respuesta por
defecto que se encuentra definida en `src/mocks/handlers.js`:

```js
user_metadata: {
  value: '{"count":2}',
}
```

Y la cambiamos por:

```js
user_metadata: {
  value: '{"count":3}',
}
```

:::
