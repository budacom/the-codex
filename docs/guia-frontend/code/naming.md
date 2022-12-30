---
sidebar_position: 3
---

# Nombres de archivos, variables, etc.

Convenciones para nombres de archivos, constantes, variables, funciones, carpetas, etc.

:::note
Para mantener el estándar en el nombre de los archivos frontend de nuestros proyectos, utilizamos la
convención de nombrar los archivos como lo que se está exportando.
:::

## Usar PascalCase en componentes e interfaces

Componentes de React e interfaces de TypeScript los nombraremos utilizando `PascalCase`, y sus archivos también
los nombraremos de la misma forma.

Un ejemplo es el componente `<Button />`, que su archivo se nombra de la misma forma usando `PascalCase`: `Button.tsx`.

```tsx title="Button.tsx"
export const Button = ({ onClick }) => {
  // insert code here
};
```

En el caso de un componente que esté organizado en dos o más archivos, lo nombramos de la siguiente forma:

```
shared
└── components
    └── FormikCurrencyInput
        ├── index.tsx
        └── getFormatSeparators.ts
```

:::info
Sólo para el caso de componentes que están organizados en diferentes archivos, nombramos su carpeta en
`PascalCase` y su archivo principal `index.tsx`, porque exportamos el mismo nombre de la carpeta.
:::

Y en el caso de una interface, por ejemplo `Item`, que su archivo se nombra de la misma forma usando `PascalCase`:
`Item.ts`:

```ts title="Item.ts"
interface Item {
  id: number;
  name: string;
  value: string;
}
```

## Usar camelCase para variables, objetos, funciones, etc.

Variables, constantes, arrays, objetos, hooks de React y otras funciones los nombraremos usando `camelCase`. Para el caso
particular de hooks de React y otras funciones que exportemos, sus archivos también los nombraremos en `camelCase`.

:::info
En el caso particular de los hooks, estos deben comenzar con el prefijo `use`, donde su archivo se nombra de la forma
`use<Action><Resource>`. Por ejemplo: `useFetchTransactions.ts`. En el caso particular de las queries, `Action`
corresponde a un nombre descriptivo de lo que hace la llamada a la API (fetch, create, delete, update, cancel, etc.),
no al verbo HTTP.
:::

Un ejemplo de función es `getFormatSeparators` del componente `<FormikCurrencyInput />`, que su archivo se nombra
de la misma forma usando `camelCase`: `getFormatSeparators.ts`.

```ts title="getFormatSeparators.ts"
export const getFormatSeparators = ({ locale, currency }) => {
  // insert code here
};
```

El mismo caso aplica para un hook, por ejemplo `useFetchTransactions.ts`:

```ts title="useFetchTransactions.ts"
export const useFetchTransactions = () => {
  // insert code here
};
```

### Consideraciones con las funciones

Para el caso particular de las funciones se recomienda nombrarlas con un verbo descriptivo, es decir, que explique qué es
lo que hace la función.

:::info
Podemos escribir el nombre de una función un poco más largo si nos ayuda a tener nombres más descriptivos, asegurando que coincida
con lo que hace la función.

Por ejemplo, en vez de **initAuth** preferir `initializeAuthentication` o `initiateAuthorization`.
:::

Algunos ejemplos ya los hemos mencionado más arriba, tales como:

```ts
const useFetchTransactions = () => {
  // se compone del verbo descriptivo `FetchTransactions` y el prefijo `use` (también un verbo).
};

const getFormatSeparators = () => {
  // insert code here
};
```

Estas consideraciones son aplicables también con las funciones gatilladas por eventos de un componente, tales como `onClick`,
`onKeyDown`, `onBlur`, etc. Por ejemplo, para la prop `onClick` de un componente `<Button />` que envía el contenido de un
formulario, le asignamos la función con un verbo descriptivo como nombre:

```tsx
<Button onClick={submitForm} />
```

## Usar snake_case en mayúsculas para constantes que exportamos

Constantes que exportaremos las nombraremos usando `snake_case` en mayúsculas.

Un ejemplo de constante a exportar es `MAX_TERMS` utilizada en créditos, para representar el número máximo de meses
al momento de solicitar un crédito. Esto, mientras aún no obtenemos el valor mediante API.

```ts
export const MAX_TERMS = 12;
export const MAXIMUM_AMOUNT = 30_000_000;
```

o

```ts
const MAX_TERMS = 12;
const MAXIMUM_AMOUNT = 30_000_000;

export { MAX_TERMS, CREDITOR_ACCOUNT_FEE };
```

Para este caso, no es necesario nombrar el archivo en `snake_case` sino que lo nombramos en `camelCase`, al igual que los
archivos para variables, objetos, funciones, etc. Por ejemplo: `loanConstants.ts`.
