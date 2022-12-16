---
sidebar_position: 1
---

# Typescript

[Typescript](https://www.typescriptlang.org/) es un lenguaje de programación, superconjunto de JavaScript. 

Su principal característica sobre javascript, es que añade tipado estático, lo que significa que toda variable es de un tipo específico. Algunos de los tipos mas usados son `number`, `string` y `boolean`. 

En esta guía exploraremos algunas consideraciones a tener en cuenta al momento de programar en este lenguaje. 

## Definición de tipos

Cuando hacemos uso del tipado en modo `strict` de TypeScript, nos pedirá que le asignemos a todo un tipo específico. Acá exploraremos algunos casos específicos. 

### Tipos para librerías de terceros

TypeScript nos pedirá que las librerías que usemos vengan tipadas. En algunos casos estos paquetes ya existen, y se puede resolver agregando el paquete con `yarn`. 

```jsx
yarn add -D @types/lodash
```

Y si no existe, debe ser definido como un módulo.

### Tipos para los argumentos de una función

Para los argumentos de una función podemos definir los tipos con tipado en línea, o bien con *interfaces*. 

#### En linea:

```jsx
const MyComponent = ({ arg }: { arg: string; }) => {
	// insert code here
};
```

#### *Interfaces*:

Cuando definimos una *interface*, esta la asignamos en los argumentos para que se interpreten los tipos de datos:

```jsx
interface Props {
	arg1: string;
	arg2: number;
	arg3: boolean;
};

const MyComponent = ({ arg1, arg2, arg3 }: Props) => {
	// your code here
};
```

**Sugerencia**: usa una *interface* cuando tengas 3 o más props.

:::info
También podemos tipar los argumentos de una función mediante *types* de Typescript. Sin embargo, [la documentación](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) recomienda que ocupemos *interfaces* siempre que sea posible.  
:::

### Tipos al usar el hook `useState`

Si queremos que el estado de una variable se actualice con cierta estructura, podemos indicar una *interface*:

```jsx
const [simulatedLoan, setSimulatedLoan] = useState<Loan>({
  cae: 0,
	...
  due_date: '',
  annual_rate_bp: 0,
});
```

Acá se aplicará la *interface* `Loan` al *state*. 

En cuanto al *setter* de `useState`, si queremos pasarlo como argumento a otra función, debemos entregar sus tipos: 

```jsx
const LoanSimulatorForm = ({
  setSimulatedLoan,
}: {
// highlight-start    
  setSimulatedLoan: (loan: Loan) => void;
// highlight-end
}) => {
	// your code here
};
```
Esto significa que `setSimulatedLoan` recibe un argumento tipo `Loan` y retorna `void`, ya que sólo setea el estado de la variable, sin devolver algo.

:::info
Los tipos de las funciones de los hooks de react, se pueden definir también con tipos específicos de react. En el ejemplo anterior, se podría definier el setter mediante `setSimulatedLoan: React.Dispatch<React.SetStateAction<Loan>>;`. Sin embargo, ya no los utilizamos. 
:::

### Tipo de un evento

Para los eventos usamos un tipo agnóstico:

```jsx
<FormikField
	...
  onChange={(e: { target: { value: string; name: string } }) => {
    ...
  }}
/>
```

Igual que con los hooks, este evento se podría definir con los tipos de react: `e: React.FormEvent<HTMLInputElement>`. Sin embargo, no los utilizamos para hacerlo agnóstico.

### Tipo de datos genérico

En algunos casos una función puede recibir diferentes tipos de datos y no sabremos siempre qué tipo recibirá, por lo que podemos definir un tipo genérico `T`:

```jsx
interface fetchDataProps<T> {
  onSuccess: (t: T) => void;
  onError: (t: string) => void;
}

export const fetchLoanLimits = async <T>({
  onSuccess,
  onError
}: fetchDataProps<T>) => {
  // your code here
}
```

En este ejemplo, definimos una `interface` con un tipo genérico `T` que es recibido por la función `onSuccess`.

Al definir la función debemos indicar la interface haciendo referencia al tipo de dato genérico `fetchDataProps<T>`.


### Cambiar la key de un objeto tipado

Si queremos actualizar el valor de una *key*, será necesario indicar en el tipo de dato de la llave del objeto en cuestión, y será necesario indicarlo usando `keyof`:

```jsx
interface Props {
	...
};

const quoteOnInputChange = (value: string, key: string, values: Props) => {
  let customValues = { ...values };
  // highlight-start
  let customKey = key as keyof Props;
  // highlight-end
  customValues[customKey] = value;

  // your code here
}
```

## Otras consideraciones

### Organización de *interfaces*

Si vamos a definir una *interface* que será reutilizada, la podemos dejar en la carpeta `react/types`. Por ejemplo, en `react/types/loan`, se define la interface `Loan` que se ocupa en múltiples componentes:

```jsx
interface Loan {
    ...
}
export default Loan;
```

Luego, la importamos donde queramos ocuparla:

```jsx
import { Loan } from '@/types';
```

Si una *interface* la ocuparemos en un solo componente, podemos dejarla definida en el mismo componente. 

## Configuración

La configuración principal la encontramos en `tsconfig.json`. Ahí, por ejemplo, seteamos el modo `strict` de Typescript:

```json
"compilerOptions": {
    ...
    "strict": true,
    ...
}
```

También, usamos un linter específico para Typescript. En la configuración de ESLint usada por react, (en `app/react/.eslintrc.json`) se escribió un `overrides` para que este linter aplique sólo para archivos con extensión `ts` o `tsx`:

```json
{
	"overrides": [
	  {
	    "files": ["*.{ts,tsx}"],
	    "parser": "@typescript-eslint/parser",
	    "plugins": ["@typescript-eslint"],
	    "extends": ["plugin:@typescript-eslint/recommended"]
	  }
	]
}
```


## Mas información

Ante cualquier duda, usar la [guía de estilos de Javascript/Typescript de Google](https://google.github.io/styleguide/tsguide.html).



