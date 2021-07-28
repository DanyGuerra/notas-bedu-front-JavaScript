
// Reto 1 Potencia de un numero
function power(base, exponent){
  let acumulado = 1;
  for(let i=0;i<exponent;i++){
    acumulado *= base;
  }
  return acumulado;
}
console.log('Funcion exponencial: ', power(5,2));













// Reto 2 Numero mayor que
// function getLargerInt(number1, number2) {
//   if (number1 > number2) {
//     return number1
//   } else {
//     return number2
//   }
// }
// console.log('Funcion de numero mayor: ', getLargerInt(52, 22));

//Reto 3 Serie de Fibonacci
// function fibonacci(limit){
//   let serFibonacci = [];
//   if (limit < 1){
//     return console.log('Limite debe ser mayor a 0')
//   }
//   for(let i = 0; i < limit; i++){
//     if(i<=1){
//       serFibonacci.push(1);
//     }else{
//       serFibonacci.push(serFibonacci[i - 1] + serFibonacci[i - 2])
//     }
//   }
//   return serFibonacci;
// }
// console.log('Serie de fibonacci: ', fibonacci(15));

