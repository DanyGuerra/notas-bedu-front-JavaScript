// Reto 1
function power(base, exponent){
  let acumulado = 1;
  for(let i=0;i<exponent;i++){
    acumulado = acumulado * base;
  }
  return acumulado;
}

console.log(power(3,3));