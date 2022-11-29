---
sidebar_position: 2
---

# Hooks de React

En React hacemos uso de sus hooks, tales como: `useEffect`, `useMemo` o `useCallback`. Acá encontrarás
las recomendaciones que hacemos sobre su uso.

## El hook useEffect

`useEffect` es el hook más conocido de React, y probablemente con es el primer hook con el que nos
familiarizamos. Por esta razón, es importante saber cuál es su uso recomendado.

- **Uso recomendado**:

  - ✅ Para hacer `fetch` de datos. Aunque, este caso en particular no aplica si estamos usando una
    librería como [React Query](https://tanstack.com/query/v4/) que se encarga de esto por nosotros.
  - ✅ Para sincronizar un widget que no es de React con un estado, o para actualizar nuestro componente
    con algún cambio en el DOM.

- **No recomendado para**:

  - ❌ Filtrar o transformar datos.
  - ❌ Manejar eventos del usuario.

:::info
Para conocer con más detalle cada uno de los casos en los que **no se recomienda** utilizar un efecto,
puedes revisar la [siguiente documentación](https://beta.reactjs.org/learn/you-might-not-need-an-effect).
:::

### Uso Recomendado ✅

► **Sincronizar un widget que no es de React con un estado**

Si intentamos hacer cambios en el DOM como a continuación:

```jsx
const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  // highlight-start
  if (isPlaying) {
    ref.current.play(); // Calling these while rendering isn't allowed.
  } else {
    ref.current.play();
  }
  // highlight-end

  // <video> doesn’t have an isPlaying prop.
  return <video ref={ref} src={src} loop playsInline />;
};
```

🚫 Recibiremos la alerta `Cannot read properties of null` porque el componente no se ha terminado de
renderizar, y por lo tanto `ref` aún no está definido.

🎯 Para este caso en particular necesitaremos hacer uso del hook `useEffect` para acceder a `ref` una
vez que haya terminado el render del componente y así gatillar un evento sobre el widget:

```jsx
const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  // highlight-start
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.play();
    }
  }, [isPlaying]);
  // highlight-end

  return <video ref={ref} src={src} loop playsInline />;
};
```

### Uso No Recomendado ❌

► **Setear un estado innecesario**

Hay veces en que nos encontraremos con casos donde se setean estados dentro de un efecto:

```jsx
const App = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getFilteredUsers = () =>
    users.filter((user) => user.name.includes(search));

  // highlight-start
  useEffect(() => {
    setFilteredUsers(getFilteredUsers());
  });
  // highlight-end

  return <List users={filteredUsers} />;
};
```

En este caso no es necesario utilizar el efecto porque el estado `filteredUsers` no es realmente
necesario, y puede ser reemplazado por una `const`:

```jsx
const App = ({ users }) => {
  const [search, setSearch] = useState("");
  // highlight-start
  const filteredUsers = users.filter(user => user.name.includes(search));
  // highlight-end

  ...

  return (
    <List users={filteredUsers} />
  );
}
```

## El hook useMemo

El hook `useMemo` nos será de ayuda a la hora de memorizar el resultado de alguna función que realiza
cálculos que podrían toma mucho tiempo y reducir el rendimiento de nuestro componente.

:::info
Para conocer con más detalle cada uno de los casos en los que podrías utilizar `useMemo`,
puedes revisar la [siguiente documentación](https://beta.reactjs.org/apis/react/useMemo).
:::

En el ejemplo anterior, si `users` tuviera demasiados registros nos sería de ayuda memorizar el
filtro de `users`:

```jsx
const App = ({ users }) => {
  const [search, setSearch] = useState("");
  // highlight-start
  const filteredUsers = useMemo(() => {
    users.filter(user => user.name.includes(search));
  }, [users, search]
  // highlight-end

  ...

  return (
    <List users={filteredUsers} />
  );
}
```

🎯 **¿Cómo saber si nuestra función tomará mucho tiempo?**

Para saber si nuestra función tomará mucho tiempo y es sujeto de memorizarla con `useMemo` podemos
usar `console.time` para identificar cuánto tiempo toma la ejecución de determinada rutina en
milisegundos:

```jsx
const App = ({ users }) => {
  const [search, setSearch] = useState("");
  // highlight-start
  console.time("filteredUsers");
  const filteredUsers = users.filter(user => user.name.includes(search));
  console.time("filteredUsers");
  // highlight-end

  ...

  return (
    <List users={filteredUsers} />
  );
}
```

Así veremos en el output de la consola cuánto tiempo toma la ejecución.

:::success
Se recomienda memorizar el resultado de una función sólo cuando la ejecución tarde más de 1 milisegundo,
por lo que no será necesario en la mayoría de los casos.
:::

## El hook useCallback

El hook `useCallback` es bastante similar al hook `useMemo` porque nos ayuda a memorizar, sólo que en este
caso lo que memorizaremos será la definición de una función en vez de su resultado.

:::info
Para conocer con más detalle cada uno de los casos en los que podrías utilizar `useCallback`,
puedes revisar la [siguiente documentación](https://beta.reactjs.org/apis/react/useCallback).
:::

❓ **¿En qué caso podemos necesitarlo?**

Un caso común de uso es cuando alguna función es una dependencia de un efecto. Esto, porque cada vez que
se renderiza nuestro componente, la función es definida nuevamente y el efecto se gatilla porque
identifica en cada render que la función ha cambiado:

```jsx
const App = () => {
  const [users, setUsers] = useState([]);
  ...
  // highlight-start
  const printUsers = () => {
    console.log(users);
  };

  useEffect (() => {
    printUsers();
  }, [users, printUsers]);
  // highlight-end

  return (
    <List users={users} />
  );
}
```

🚫 Recibiremos la alerta `function makes the dependencies of useEffect Hook change on every render. Move it inside the useEffect callback. Alternatively, wrap the 'printUsers' definition into its own useCallback() Hook.` porque la definición de la función cambia con cada render y gatilla el efecto.

🎯 Para este caso en particular necesitaremos hacer uso del hook `useCallback` para memorizar la definición
de la función `printUsers`:

```jsx
const App = () => {
  const [users, setUsers] = useState([]);
  ...
  // highlight-start
  const printUsers = useCallback(() => {
    console.log(users);
  }, [users]);
  // highlight-end

  useEffect (() => {
    printUsers();
  }, [users, printUsers]);

  return (
    <List users={users} />
  );
}
```

De esta forma `printUsers` cambiará sólo cuando se actualice su dependencia `users` y sólo en ese caso
gatillará el efecto.

:::success
Se recomienda memorizar la definición de una función sólo si recibimos alguna alerta de parte del linter,
por lo que no será necesario en la mayoría de los casos.
:::
