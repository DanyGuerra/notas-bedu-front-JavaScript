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

console.log(findMissingNumbers([2, 1, 9, 5, 7, 3, 10, 15])); // [4, 6, 8]

