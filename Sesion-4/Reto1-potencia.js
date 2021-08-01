// Reto 1 Potencia de un numero
function power(base, exponent){
  let acumulado = 1;
  for(let i = 0; i < exponent; i++){
    acumulado *= base;
  }
  return acumulado;
}
console.log('Funcion exponencial: ', power(3,3));