// Reto 1
// var singers = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//   let resultado = [];
//   for(let i = 0; i < list.length; i++){
//     resultado.push(list[i][propertyName]);
//   }
//   return resultado;

// }

// console.log( pluck(singers, 'name') );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

// console.log( pluck(singers, 'born') );
// // [1948, 1950, 1967, 1964]

//Reto 2

// function createPhoneNumber(array){
//   let phone= '';
//   for(let i=0; i<array.length; i++){
//     phone += array[i];
//   }
//   phone = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`
//   return phone;
// }


// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"


//Reto 3
function findMissingNumbers(array){
  let faltantes = [];
  let max = array[0];
  let min = array[0];
  let existe = false;
  for( let elemento of array){
    if(elemento > max) max = elemento;
    if(elemento < min) min = elemento;
  }

  for(let i = min ; i < max ; i++){
    for(let element of array){
      if(element == i){
        existe = true;
        break;
      }
    }
    if(!existe){
      faltantes.push(i);
    }
    existe = false;
  }

  return faltantes;
}



console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10, 12])); // [4, 6, 8]




//Reto final
// const array1 = ['Hello'];
// const mutable = array => {
//   let newArray = [...array]
//   newArray.push('World');
//   return newArray;
// }
// console.log(`Mi array1 al inicio: ${array1}`);
// console.log(`Mi array resultante: ${mutable(array1)}`);
// console.log(`Mi array1 después de la función: ${array1}`);