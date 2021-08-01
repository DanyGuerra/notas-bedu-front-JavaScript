// Reto 3 Imprimiento numero primos
let limite = 100;

for (let num = 1; num <= limite; num++) {
  let vecesDivisible = 0;
  for(let j = 1; j <= num; j++){
    if ( num % j == 0){
      vecesDivisible++;
    }
  }
  if (vecesDivisible == 2) {
    console.log(num)
  }
  vecesDivisible = 0;
}

// Reto 3 VERSION2 Imprimiento numero primos
for (let num = 1; num <= limite; num++) {
  let vecesDivisible = 0;
  for(let j = 1; j <= num; j++){
    if ( num % j == 0){
      vecesDivisible++;
      if (vecesDivisible > 2){
        break;
      }
    }
  }
  if (vecesDivisible == 2) {
    console.log(num)
  }
  vecesDivisible = 0;
}
