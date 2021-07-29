
// Reto 1 Potencia de un numero
// function power(base, exponent){
//   let acumulado = 1;
//   for(let i = 0; i < exponent; i++){
//     acumulado *= base;
//   }
//   return acumulado;
// }
// console.log('Funcion exponencial: ', power(3,3));



// Reto 2 Numero mayor que version1
// const obtenerNumeroMayor = (numero1, numero2) => {
//   if (numero1 > numero2) {
//     return numero1
//   } else {
//     return numero2
//   }
// }
// console.log('El numero mayor es: ', obtenerNumeroMayor(2, 22));

// Reto 2 version2
// const obtenerNumeroMayor = (numero1, numero2) => {
//   return numero1 > numero2 ? numero1 : numero2;
// }
// console.log('El numero mayor es: ', obtenerNumeroMayor(222, 22));



//Reto 3 Serie de Fibonacci
// const fibonacci = (limit) => {
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
// console.log('Serie de fibonacci: ', fibonacci(20));

//Reto 3 Serie de Fibonacci
const fibonacci = (limit) => {
  let serFibonacci = [];
  for(let i = 0; i < limit; i++){
    if(i <= 1){
      serFibonacci.push(1);
    }else{
      serFibonacci.push(serFibonacci[i - 1] + serFibonacci[i - 2])
    }
  }
  return serFibonacci;
}
console.log('Serie de fibonacci: ', fibonacci(20));




