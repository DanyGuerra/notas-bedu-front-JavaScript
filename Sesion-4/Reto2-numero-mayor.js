// Reto 2 Numero mayor que version1
const obtenerNumeroMayor = (numero1, numero2) => {
  if (numero1 > numero2) {
    return numero1
  } else {
    return numero2
  }
}
console.log('El numero mayor es: ', obtenerNumeroMayor(2, 22));

// Reto 2 version2
const numeroMayor = (numero1, numero2) => {
  return numero1 > numero2 ? numero1 : numero2;
}
console.log('El numero mayor es: ', numeroMayor(222, 22));

