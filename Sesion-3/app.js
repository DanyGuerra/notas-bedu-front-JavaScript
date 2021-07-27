// Reto 1 calcular promedio
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
var numElementos = numbers.length;
var promedio;
var suma = 0;

for (let i = 0; i < numElementos; i++){
  suma += numbers[i];
}
promedio = suma / numElementos;
console.log('El promedio es: ', promedio);