---
sidebar_position: 1
---

# Ubicación de los archivos

Para el caso de los test unitarios utilizamos una forma con más acoplamiento, es decir, que los archivos de test
se encuentren cercanos al código que queremos testear.

:::info TL;DR:
Utilizamos las carpetas `/__tests__` y `/__snapshots__` dentro de cada carpeta de componente. Ejemplo de nombre
de ruta: `/src/components/ComponentX/__tests__`.
:::

## Contexto

Si bien no existe un estándar único, hay un relativo consenso de que es mejor tener más acoplamiento, que menos.

► **Más acoplamiento**

- **Ventajas**:

  - ✅ Visibilidad tests: se desarrolla más conscientemente de los tests y se sabe que está testeado y que no.

- **Desventajas**:

  - ❌ Mezcla tests con funcionalidades: _"Visual clutter"_.

► **Menos acoplamiento**

- **Ventajas**:

  - ✅ Árbol "mas limpio".

- **Desventajas**:

  - ❌ Dificultad para encontrar tests específicos.
  - ❌ Poca visibilidad respecto a tests pendientes. Se está menos consciente de los tests.

## ¿Cómo ordenamos los tests de los componentes? 🎯

En cada carpeta de un componente (por ejemplo `/components/ComponentX`), tendremos una
carpeta `/__tests__` que contiene los tests del componente, y de considerarse necesario,
también una carpeta `/__snapshots__`

📝 Cada componente tiene su propio archivo de test y de snapshot:

```
src
└── components
    ├── componentX.js
    ├── componentY.js
    ├── ...
    └── __tests__
    |       ├── componentX.spec.js
    |       ├── componentY.spec.js
    |       └── ...
    └── __snapshots__
            ├── componentX.spec.js.snap
            ├── componentY.spec.js.snap
            └── ...
```
