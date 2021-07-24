[`Menú principal`](../)

# Sesión 1: Fundamentos de JS
## Tabla de Contenidos

---

- **[¿Por qué JavaScript?](#por-qué-javascript)**



## ¿Por qué JavaScript?

Por octavo año consecutivo, JavaScript es el lenguaje de programación más usado entre desarrolladores. Esto según la [última encuesta](https://insights.stackoverflow.com/survey/2020#most-popular-technologies) realizada por StackOverflow, una de las comunidades más importantes de desarrollo.

### JavaScript en el Front
![Imagen](https://raw.githubusercontent.com/beduExpert/Programacion-JavaScript-Santander-2021/main/Sesion-01/assets/front-end.png)

### JavaScript en el Back

![Imagen](https://raw.githubusercontent.com/beduExpert/Programacion-JavaScript-Santander-2021/main/Sesion-01/assets/back-end.png)

### Qué es JavaScript?

JavaScript es:

- Un lenguaje de programación que permite ejecutarse principalmente en cada navegador (Google Chrome, Safari, Firefox,
  Opera, etc.).
- Multiplataforma. También puede ser usado fuera del navegador.
- Multiparadigma. Si bien se define como un lenguaje orientado a objetos es lo suficientemente flexible como para
  implementar principios de programación funcional e incluso programación reactiva.
- **Javascript no es Java. Son lenguajes completamente diferentes**
- Uno de los tres pilares de un sitio web:
    - HTML maneja el contenido, la estructura, el esqueleto, el "markup".
    - CSS maneja la presentación, el diseño, la visualización de la aplicación.
    - JS maneja la interactividad, efectos, dinamismo y más adelante, la gestión de datos y el flujo de los mismos a
      otras áreas de la aplicación.

## Qué son las variables?
Las variables se utilizan para almacenar información dentro de tu programa para ser manipulados.

En el modo más general, te ayudan a etiquetar datos. Los llamaremos en el momento que los necesitemos a lo largo del programa.

Las variables se dividen en 4 partes:

- Declaración (**`var`**). Cuando comienzas una variable, debes de utilizar la palabra `var`

- Nombre (**etiqueta**). Irá del lado izquierdo. Será cómo llamarás la variable más adelante.

- Asignación (`=`). A diferencia de la aritmética donde se le conoce como "igual", en Javascript se le conoce como asignación, el cual asignará el valor de lo que el área de su lado derecho genere hacia el lado izquierdo (Nombre).

- Valor (**Tipo de dato**). Puede ser un texto, un número, un conjunto de datos (objetos, arreglos).

Ejemplo:

```javascript
var name = "John Doe";
```

### Convención de nombres
Si se generá una variable que implica el uso de dos palabras es necesario usar una convención, podemos usar:

- Camel case: `nombreDeLaVariable`

- Snake case: `nombre_de_la_variable`

### `let` y `const`

[Documentación `let`](https://www.w3schools.com/js/js_let.asp)

[Documentación `var`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)

En JavaScript todas las variables son inicializadas con undefined al momento de su creación.


- Si se trata de acceder a una variable con `let` antes de ser declarada obtenemos un `ReferenceError` en lugar de `undefined`.

```javascript
console.log(name); // undefined
var name = "John Doe";
```

-  `let` te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.a diferencia de la palabra clave `var` la cual define una variable global o local en una función sin importar el ámbito del bloque.

- Las variables definidas con `let` no se pueden volver a declarar.

- Las variables definidas con `let` deben declararse antes de su uso.

- Las variables definidas con `let` tienen alcance de bloque.

- `const` es muy similar a `let`, la única diferencia es que una vez asignado un valor a una variable ya no se puede reasignar.

```javascript
let name = 'John Doe';
const email = 'john@doe.com';

name = 'Jane Doe';
email = 'jane@doe.com'; // TypeError: Assignment to constant variable.

```

## Tipos de datos

JavaScript es un lenguaje de tipado débil, significa que no es necesario declarar el tipo de variable antes de usarla. El tipo de dato es determinado automáticamente cuando el programa esté siendo procesado.

JavaScript cuenta con seis tipos de datos que pueden ser divididos en tres categorías:

### Primitivos

#### 1. String
Este tipo de dato es utilizado para almacenar cadenas de texto. Los strings son creados con comillas dobles o sencillas alrededor de uno o más caracteres.

```javascript
var a = 'Hello World!';	// Comillas sencillas
var b = "Hello World!";	// Comillas dobles
```
Las comillas también pueden formar parte de la cadena de texto siempre y cuando no coincidan con las comillas que abren y cierran el string.

```javascript
var a = "Let's learn JavaScript.";	// Comilla sencilla dentro de comillas dobles
var b = 'He said "Hello" and left.';	// Comillas dobles dentro de comillas sencillas
var c = 'We\'ll never stop learning.';	// Escapando comilla sencilla con backslash
```

Si queremos agregar el valor de una variable a una cadena de texto debemos concatenar ambos con el signo + y siempre tener cuidado de agregar espacios en blanco para que no salgan ambos textos juntos.

```javascript
const name = 'John Doe';

console.log("Welcome " + name); // Welcome John Doe

```

Una alternativa a esta concatenación es el uso de _template strings_ que son cadenas de texto que permiten la interpolación mediante expresiones. Para esto se utiliza _backticks_.

```javascript
const name = 'John Doe';

console.log(`Welcome ${ name }`); // Welcome John Doe

```


#### 2. Number




#### 3. Boolean

### Compuestos
- Objetos
- Array
- Function

### Especiales
- Undefined
- Null