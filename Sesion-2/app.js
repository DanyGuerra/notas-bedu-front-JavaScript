// Reto 1
const time = 24;
let greeting
if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else if (time >= 20 && time <= 24) {
  greeting = "Good evening";
} else if (time > 24){
  greeting = " ";
}

console.log(greeting) // Good afternoon




// Reto 2 Imprimir numeros pares de 0 al 100
// for(var i = 0; i<=100; i++){
//   if ( i % 2 === 0){
//     console.log(i)
//   }
// }


// Reto 3 Imprimiento numero primos
// for (let num = 1; num <= 100; num++) {
//   let vecesDivisible = 0;
//   for(let j = 1; j <= num; j++){
//     if ( num % j == 0){
//       vecesDivisible = vecesDivisible + 1;
//     }
//   }
//   if (vecesDivisible == 2) {
//     console.log(num)
//   }
//   vecesDivisible = 0;
// }
