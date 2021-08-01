//Reto Final: Sumar todos los Arrays y sumar solo los numeros primos
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
  array3: [11, 12, 13, 14, 15]
};
const totalArray = [...array1, ...array2, ...calificaciones.array3];

function isPrimo(number) {
  if (number < 2) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumarPrimos(lista){
  let sumaTotal = 0;
  for(number of lista){
    if(isPrimo(number) == true){
      sumaTotal += number;
    }
  }
  return sumaTotal;
}
console.log('Array a sumar: ', totalArray)
console.log('La suma de los numeros primos es: ', sumarPrimos(totalArray));


