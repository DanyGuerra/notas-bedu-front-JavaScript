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
El tipo de dato Number se usa para representar números enteros positivos o negativos con o sin punto decimal, incluso se puede usar en números con notación científica.


```javascript
var a = 12;	// Entero
var b = 32.43;	// Decimal
var c = 2.25e+6;  // Equivalente a 2.25x10^6 o 2250000
var d = 2.25e-6;  // Equivalente a 2.25x10-6 o 0.00000225

```

Este tipo de dato incluye `Infinity`, `-Infinity` y `NaN`.

`Infinity` represnenta el número matemático y `NaN` representa un valor no numérico, resultado de una operación matemática inválida.

```javascript
console.log(7 / 0); // Infinity
console.log(-7 / 0);  // -Infinity
console.log("Hello World" / 2);	// NaN
console.log("Hello World" * 2);	// NaN
console.log(Math.sqrt(-1)); // NaN

```

`Nota`: debido a que `NaN` puede provenir de una operación matemática inválida ya sea con una cadena de texto o con número, se tiene lo siguiente:

```javascript
NaN===NaN; //Esta expresión devuelve false
```
#### 3. Boolean
Las variables que contengan este tipo de dato sólo pueden almacenar uno de dos valores: `true` o `false`. Una este tipo de dato representa encendido (`true`) o apagado (`false`).

```javascript
var isUserActive = true;  // Sí, el usuario se encuentra activo
var isUserAdmin = false;  // No, el usuario no es admin

var luces = true //Las luces estan encendidas
var luces = false //Las luces estan apagadas
```

### Compuestos
#### 1. Objetos

#### 2. Array
#### 3. Function

### Especiales
#### 1. Undefined
Cuando una variable es declarada, pero no se le ha asignado un valor, por default su valor es undefined.

```javascript
var a;
var b = 'Hello World';

console.log(a);	// undefined
console.log(b);	// Hello World

```

#### 2. Null

Cuando encontremos `null` significa que no hay valor. No es lo mismo que cero o `undefined`, simplemente es `null` o nada.

```javascript
var a = 'Hello World';
console.log(a);	// Hello World

a = null
console.log(a);	// null

```

## Operador `typeof`
El operador typeof es utilizado para averiguar qué tipo de dato contiene una variable. Puede ser usado con o sin paréntesis (typeof(a) o typeof a).

```javascript
var a = 5;
var b = 'false';
var c = true;
var d;

console.log(typeof a) //number
console.log(typeof b) //string
console.log(typeof c) //boolen
console.log(typeof d) //undefined
```


## Type coercion

La coerción de datos o type coercion es el proceso de convertir un valor de un tipo de dato a otro, por ejemplo, string a number, boolean a string, etc. Dicho proceso se puede dar de manera tanto explícita como implícita.

### Manera expícita

La forma explícita es cuando se quiere hacer de manera intencional usando las funciones adecuadas como String(value) o Number(value), a esto también se le conoce como type casting.
En JavaScript existen tres tipos de conversiones posibles.

 - String
 - Number
 - Boolean

 ```javascript
String(123);  // '123'
String(3.14); // '3.14'
String(true); // 'true'
String(false);  // 'false'
String(undefined);  // 'undefined'
String(null); // 'null'

Number(' 10 '); // 10
Number('-10');  // -10
Number('123abc'); // NaN
Number(true); // 1
Number(false);  // 0
Number(null); // 0
Number(undefined);  // NaN

Boolean(1); // true
Boolean(0); // false

 ```
### Manera implícita

Esta manera de conversión de tipo de dato se da cuando no se utilizan las funciones de la manera explicita. Ejemplos:

```javascript
123 + ''; // "123"
`${123}`; // "123"

+ '123';  // 123
1 - '1';  // 0
2 * '2';  // 4

if(1) {  } // true
!!2;  // Operador logico doble negacion: true
2 || 'Hello World'; //Operador lógico: true
```



## Operadores Básicos

Con respecto al tipo de datos `Number` puedes ejecutar operaciones para cambiar su valor.

| Operador | Descripción                       | Ejemplo Javascript    | Observaciones                                     |
|----------|-----------------------------------|-----------------------|---------------------------------------------------|
| +        | Adición                           | var resultado = 4 + 3 |                                                   |
| -        | Substracción                      | var resultado = 4 - 3 |                                                   |
| *        | Multiplicación                    | var resultado = 4 * 3 |                                                   |
| /        | División                          | var resultado = 4 / 2  | "resultado" devolvería 2                                              |
| %        | "Modulus"<br>Residuo de la división | var resultado = 4 % 2 | "resultado" devolvería 0                          |
| ++       | Incremento                        | var resultado = 4++   | "resultado" devolvería 5, <br> después de su ejecución |
| --       | Decremento                        | var resultado = 4--   | "resultado" devolvería 3, <br> después de su ejecución |

#### [Ejemplo 2: Operadores](./Ejemplo-02)

---

## Precedencia de Operadores

La precedencia es el orden en el cual los operadores se evaluan al momento de ejecutar la operación.

<table>
  <tr>
    <th>Precedencia</th>
    <th>Operador</th>
    <th>Descripción</th>
    <th>Asociatividad</th>
  </tr>
  <tr>
    <td>Primero</td>
    <td>(...)</td>
    <td>Agrupación</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td rowspan="2">Segundo</td>
    <td>++</td>
    <td>Incremento</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>--</td>
    <td>Decremento</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td class="tg-0lax" rowspan="2">Tercero</td>
    <td class="tg-0lax">+</td>
    <td class="tg-0lax">Unario más</td>
    <td class="tg-0lax" rowspan="2">Deracha a izquierda</td>
  </tr>
  <tr>
    <td class="tg-0lax">-</td>
    <td class="tg-0lax">Negación unaria</td>
  </tr>
  <tr>
    <td rowspan="3">Cuarto</td>
    <td>\*</td>
    <td>Multiplicación</td>
    <td rowspan="3">Izquierda a derecha</td>
  </tr>
  <tr>
    <td>/</td>
    <td>División</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Módulo</td>
  </tr>
  <tr>
    <td rowspan="2">Quinto</td>
    <td>+</td>
    <td>Adición</td>
    <td rowspan="2">Izquierda a derecha</td>
  </tr>
  <tr>
    <td>-</td>
    <td>Substracción</td>
  </tr>
</table>