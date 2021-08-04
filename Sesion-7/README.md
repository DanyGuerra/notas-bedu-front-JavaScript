# Sesion 7: Programación funcional

## Paradigma de programación

<table>
  <tr>
    <th colspan="2">Programación imperativa</th>
  </tr>
  <tr>
    <td colspan="2">Describe paso a paso un conjunto de instrucciones necesarias para solucionar el problema. Se enfoca en describir el <i>cómo</i> se llega a la solución.</td>
  </tr>
  <tr>
    <th>Programación orientada a objetos</th>
    <td>Se encapsulan tanto variables como funciones en objetos. Dichos objetos manipulan los datos de entrada para la obtención de datos de salida específicos. Cada objeto creado ofrece una funcionalidad específica. <strong>Ejemplos:</strong> C++, C#, Java.</td>
  </tr>
  <tr>
    <th colspan="2">Programación declarativa</th>
  </tr>
  <tr>
    <td colspan="2">Se describe el problema que se pretende solucionar. Está más enfocado en el <i>qué</i> solución se desea alcanzar.</td>
  </tr>
  <tr>
    <th>Programación funcional</th>
    <td>Está basado en las funciones matemáticas, lo que permite hacer uso de mecanismos matemáticos para optimizar procesos. Prevalece la inmutabilidad y los datos son usados con transparencia referencial. <strong>Ejemplos:</strong> Erlang, Rust, Haskell.</td>
  </tr>
</table>



### Programación funcional

La programación funcional es un paradigma declarativo. Veamos un ejemplo para diferenciar código imperativo y declarativo.

- **Programación imperativa:** Generalmente usar ciclos es programación imperativa pues queda del lado del programador controlar cuándo iniciar, cuándo terminar y qué hacer en cada ciclo. Es decir, **el programador describe el cómo se debe resolver un problema.**

```javascript
//Ejemplo de programacion imperativa

const numbers = [1, 2, 3, 4, 5]
const doubles = []

for(var i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2)
}

console.log(numbers) // [1, 2, 3, 4, 5]
console.log(doubles) // [2, 4, 6, 8, 10]

```


- **Programación declarativa:** En esta forma declarativa el programador no se preocupa por controlar cuándo y dónde terminar el ciclo, sólo se encarga del resultado esperado. En otras palabras, **el programador se enfoca en qué resultado se quiere alcanzar sin definir explícitamente el cómo se hará.**


```javascript
//Ejemplo programacion declarativa
const numbers = [1, 2, 3, 4, 5]
const doubles = numbers.map((number) => number * 2)

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]
```

En esta forma declarativa el programador no se preocupa por controlar cuándo y dónde terminar el ciclo, sólo se encarga del resultado esperado. En otras palabras, el programador se enfoca en qué resultado se quiere alcanzar sin definir explícitamente el cómo se hará.

Uno de los conceptos principales de la programación funcional es la inmutabilidad, significa no cambiar o alterar una variable, lo que implica que constantemente estaremos creando nuevos valores para reemplazar los antiguos.

Esto se logra mediante el uso de funciones puras, a diferencia de cualquier otra función, las funciones puras no producen efectos secundarios, es decir, no modifican algo fuera de la función, sólo trabajan con los parámetros que reciben y siempre retornan un valor.


```javascript

const car = {
  brand: 'Nissan',
  model: 'Sentra',
  year: 2020
}

function addColor(car) {
  car.color = 'Black'
  return car
}

console.log('Before calling addColor()', car)

const sameCar = addColor(car)

console.log('After calling addColor()', car)
console.log('After calling addColor()', sameCar)
console.log('Same car?', car === sameCar) // true


```


