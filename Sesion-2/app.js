// Reto 1
// const time = 30;
// let greeting
// if (time < 12) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20 && time <= 24) {
//   greeting = "Good evening";
// } else if (time > 24) {
//   greeting = "Hora invalida";
// }
// console.log(greeting) // Good afternoon


// Reto MARIANO
// var diametroSup = 2;
// var grosorInferior = 0.25;
// mensaje = '';

// if(diametroSup > 1.4){
//   mensaje="La rueda es para un vehiculo grande";
// }else if (diametroSup<=1.4 && diametroSup>0.8){
//   mensaje="La rueda es para un vehiculo mediano";
// }else{
//   mensaje="La rueda es para un vehiculo pequeño";
// }

// if (((diametroSup > 1.4) && (grosorInferior < 0.4)) || ((diametro<=1.4 && diametro>0.8)&&grosorInferior<0.25)) {
//    mensaje = "El grosor para esta rueda es inferior al recomendado"
// }

// console.log(mensaje)



// Reto 2 Imprimir numeros pares de 0 al 100
// for(var i = 0; i<=100; i++){
//   if ( i % 2 == 0){
//     console.log(i)
//   }
// }

// Reto 3 Imprimiento numero primos
// console.time('Prueba')
// for (let num = 1; num <= 1000; num++) {
//   let vecesDivisible = 0;
//   for(let j = 1; j <= num; j++){
//     if ( num % j == 0){
//       vecesDivisible++;
//     }
//   }
//   if (vecesDivisible == 2) {
//     console.log(num)
//   }
//   vecesDivisible = 0;
// }
// console.timeEnd('Prueba')

// Reto 3 VERSION2 Imprimiento numero primos
// console.time('Prueba')
// for (let num = 1; num <= 1000; num++) {
//   let vecesDivisible = 0;
//   for(let j = 1; j <= num; j++){
//     if ( num % j == 0){
//       vecesDivisible++;
//       if (vecesDivisible > 2){
//         break;
//       }
//     }
//   }
//   if (vecesDivisible == 2) {
//     console.log(num)
//   }
//   vecesDivisible = 0;
// }
// console.timeEnd('Prueba')




//Funciones de cada uno de los retos

function saludar(hora){
  time = hora;
  let greeting
  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good afternoon";
  } else if (time >= 20 && time <= 24) {
    greeting = "Good evening";
  } else if (time > 24) {
    greeting = "Hora invalida";
  }
  return greeting
}
console.log('Funcion saludar:',saludar(10))