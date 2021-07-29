# 1. Deep Equal
La función deepEqual recibe dos argumentos y retorna `true` si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben son comparados con una
llamada recursiva de deepEqual.

Usando el operador `typeof` puedes determinar si ambas variables son objetos, de ser así se llama nuevamente deepEqual para comparar las propiedades de dichos objetos, en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

La función `Object.keys()` es útil para obtener las propiedades de los objetos.

Ejemplo de deepEqual:

```javascript

 function deepEqual(a, b) {
 // Code goes here
}

const john = {
 firstName: 'John',
 lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
```

## [Resultado de deepEqual](./deepEqual.js)

<!-- Aqui va el resultado de la funcion -->

```javascript
//Funcion deepEqual()

```


# 2. Chunk



# 3. Frequency




