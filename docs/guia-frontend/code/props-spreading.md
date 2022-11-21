---
sidebar_position: 3
---

# Uso de props spreading

El operador **spread** (`...`) se utiliza para acceder a todos los elementos de un objeto sin necesidad de especificarlos
individualmente o iterarlos. El operador **spread** hace una copia del objeto "iterado".

:::info TL;DR:

```Javascript
<Component {...props} /> || # props spreading
<Component name={name} />
```

Está permitido el uso de **props spreading** en los componentes que se encuentren en la carpeta `/shared`. En cualquier
otro caso se deben asignar las props individualmente.
:::

## Contexto

Si bien podemos utilizar el operador **spread** para asignar props a un componente, debemos utilizarlo con cuidado
porque podemos asignar props que no utilizaremos, que eventualmente podrían gatillar re-renders y
afectar el rendimiento.

Otra razón para evitar el uso de **props spreading** es que no tenemos visibilidad de las props específicas
que estamos asignando, aunque esto lo podemos resolver si utilizamos `TypeScript` para tipar el objeto que
estamos asignando.

:::note
Utilizamos la regla de **eslint** `react/jsx-props-no-spreading`, para prevenir el uso de props spreading.
:::

Por otra parte el uso de **props spreading** tiene algunas ventajas:

- ✅ Escribir menos código porque no tenemos que asignar explícitamente cada prop.
- ✅ En el caso particular de HTML, preferimos no ser explícitos para asignar props nativas, como por ejemplo:
  `disabled`, `class`, `id`, `alt`, etc., sino que más bien preferimos tener la libertad de usar fácilmente
  la API HTML nativa.

Por las ventajas anteriores está permitido el uso de **props spreading** pero sólo en los componentes que se
encuentren en la carpeta `shared`, por lo que sólo en esta carpeta se encuentra deshabilitada la regla de
**eslint** `react/jsx-props-no-spreading`.
