---
sidebar_position: 3
---

# Nombres de archivos y variables

Convenciones para nombres de archivos, constantes y variables.

## Nombres de archivos

Para mantener el estándar en el nombre de los archivos frontend de nuestros proyectos, utilizamos la
convención de llamar a los archivos como lo que exportan por defecto.

- Componentes de React e interfaces de TypeScript utilizan `PascalCase`, por lo que el archivo también
  debe escribirse en `PascalCase`.
- Hooks de React y otras funciones de JS utilizan `camelCase`, por lo que el archivo también debe
  escribirse en `camelCase`.

:::info
Sólo para el caso de componentes que están organizados en diferentes archivos, nombramos su carpeta en
`PascalCase` y su archivo principal `index.ts`, porque exportamos el mismo nombre de la carpeta.
:::

### Ejemplos 🔍

► **Componentes**

En el caso del componente `<Button />` que está contenido en un solo archivo, se nombra de la
siguiente forma:

```
shared
└── components
    └── Button.ts
```

► **Componentes organizados en varios archivos**

En el caso del componente `<FormikCurrencyInput />` que está organizado en dos archivos, se nombran
de la siguiente forma:

```
shared
└── components
    └── FormikCurrencyInput
        ├── index.ts
        └── getFormatSeparators.ts
```

► **Hooks de React y otras funciones**

Un ejemplo de hook son las queries, donde su archivo se nombre de la forma `use<Action><Resource>`.
Por ejemplo: `useFetchTransactions.ts`. Donde `Action` corresponde a un nombre descriptivo de lo que hace la llamada a la API
(fetch, create, delete, update, cancel, etc.), no al verbo HTTP.

Un ejemplo de función es la función `getFormatSeparators` del componente `<FormikCurrencyInput />`, que se nombra
de la misma manera usando `camelCase`: `getFormatSeparators.ts`.
