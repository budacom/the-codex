---
sidebar_position: 1
---

# Queries y calls

En nuestro frontend web, hacemos nuestras llamadas a la API desde el frontend usando [Axios](https://axios-http.com/)
y [React Query](https://tanstack.com/query/v4/). Aquí verás cómo se deben llamar y ordenar los archivos que contienen las
queries de [React Query](https://tanstack.com/query/v4/) y las funciones que hacen las llamadas a la API.

:::info TL;DR:
Queries y calls se agregan en una carpeta `/api` dentro de cada carpeta de feature. Ejemplo de nombre de
query: `useFetchTransactions`. Ejemplo de nombre de call: `fetchTransactions`.
:::

## Contexto

Para interactuar con la API desde el frontend, usamos la librería [React Query](https://tanstack.com/query/v4/)
que ofrece hooks como `useQuery` y `useMutation`, y funcionalidades como manejo de estado, manejo de errores,
estrategias de refetching, caching, etc. Sobre estos hooks tenemos wrappers para agregar su configuración.
A estos wrappers les llamaremos **queries** y puedes ver un ejemplo
[acá](https://github.com/budacom/surbtc/blob/master/app/react/features/investments/api/useFetchTransactions.ts).

Pero React Query no hace la llamada misma a la API. A los queries hay que entregarles una función que hace la llamada.
A estas funciones les llamaremos **calls** (por detrás usan Axios) y puedes ver un ejemplo
[acá](https://github.com/budacom/surbtc/blob/master/app/react/features/investments/api/fetchTransactions.ts).

## ¿Cómo ordenamos las queries y calls? 🎯

En cada carpeta de feature (por ejemplo `/investments`) o en la carpeta `/shared`, debe existir una
carpeta `/api` que contiene las queries y calls. Si aumenta el número de archivos de la carpeta,
se puede separar en dos, una para queries y otra para calls.

📝 Cada query tiene su propio archivo, y cada call tiene su propio archivo.

Las **queries** y sus correspondientes archivos tienen que llamarse de la forma `use<Action><Resource>`,
por ejemplo: `useFetchTransactions`. Con _Action_ nos referimos a un nombre descriptivo de lo que hace la
llamada a la API (fetch, create, delete, update, cancel, etc.), no al verbo HTTP.

Las **calls** y sus correspondientes archivos tienen que llamarse de la forma `<action><Resource>`,
por ejemplo: `fetchTransactions`.

## Ejemplo 🔍

Puedes ver un ejemplo en el [directorio de la feature de inversiones](https://github.com/budacom/surbtc/tree/master/app/react/features/investments)
en SurBTC, que tiene un archivo [api/fetchTransactions.ts](https://github.com/budacom/surbtc/blob/master/app/react/features/investments/api/fetchTransactions.ts)
y un archivo [api/useFetchTransaction.ts](https://github.com/budacom/surbtc/blob/master/app/react/features/investments/api/useFetchTransactions.ts)

```
investments
└── api
    ├── fetchTransactions.ts
    └── useFetchTransactions.ts
```
