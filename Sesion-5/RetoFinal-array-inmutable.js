//Reto final
// Hacer que la función mutable, utilice un nuevo array y no
// modifique mi array principal llamado "array1"

const array1 = ['Hello'];
const mutable = array => {
  let newArray = [...array]
  newArray.push('World');
  return newArray;
}
console.log(`Mi array1 al inicio: ${array1}`);
console.log(`Mi array resultante: ${mutable(array1)}`);
console.log(`Mi array1 después de la función: ${array1}`);