// Reto 1 calcular promedio
// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
// var numElementos = numbers.length;
// var promedio;
// var suma = 0;

// for (let i = 0; i < numElementos; i++){
//   suma += numbers[i];
// }
// promedio = suma / numElementos;
// console.log('El promedio es: ', promedio);

//Reto 2 pasar un array a objeto
// const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
// objCar = {};

// for(const element of car){
//   objCar[element[0]]=element[1];
// }
// console.log(objCar)

//Reto 3 destructuring de un objeto
const person = {
  firstName: 'John',
  lastName: 'Doe',
  links: {
    web: {
      blog: 'https://johndoe.com'
    },
    social: {
      facebook: 'https://facebook.com/john.doe',
      instagram: 'https://instagram.com/john.doe'
    }
  }
}

// Extrae el key de facebook y instagram
// const {facebook, instagram} = person.links.social;

// // Extrae el key de facebook y instagram; y lo reasigna a fb y ig
// const {facebook: fb, instagram: ig} = person.links.social;
// console.log('Link Facebook: ',fb, 'Link Instagram: ' ,ig);


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
console.log(totalArray)
console.log('La suma de los numeros primos es: ', sumarPrimos(totalArray));



