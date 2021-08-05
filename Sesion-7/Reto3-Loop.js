// Crear una función compact que recibe un arreglo y retorna un nuevo arreglo
// sin incluir los valores que sean falsy.

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

const test = function(n) {
  return n > 0;
}

const update = function(n) {
  return n - 1;
}

loop(5, test, update, console.log);
// 3
// 2
// 1

