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
function getLargerInt(number1, number2) {
  if (number1 > number2) {
    return number1
  } else {
    return number2
  }
}
console.log('Funcion de numero mayor: ', getLargerInt(52, 22));
