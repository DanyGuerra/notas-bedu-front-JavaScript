// Reto 1 calcular promedio
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
let numElementos = numbers.length;
let promedio;
let suma = 0;

for (let i = 0; i < numElementos; i++){
  suma += numbers[i];
}
promedio = suma / numElementos;
console.log('El promedio es: ', promedio);