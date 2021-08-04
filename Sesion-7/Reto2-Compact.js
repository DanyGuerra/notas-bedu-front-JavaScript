// Crear una función compact que recibe un arreglo
// y retorna un nuevo arreglo sin incluir los valores
// que sean falsy.

function compact(array) {
  return array.filter(function(element) {
    return !!element;
  });
}

const array = [0, 1, false, 2, '', 3];
const compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]
