//Reto 3 Serie de Fibonacci
const seriefibonacci = (limit) => {
  let serFibonacci = [];
  if (limit < 1){
    return console.log('Limite debe ser mayor a 0')
  }
  for(let i = 0; i < limit; i++){
    if(i<=1){
      serFibonacci.push(1);
    }else{
      serFibonacci.push(serFibonacci[i - 1] + serFibonacci[i - 2])
    }
  }
  return serFibonacci;
}
console.log('Serie de fibonacci: ', seriefibonacci(20));

// Serie de fibonacci con recursividad
function fibonacci(num){
  debugger
  if(num<=1) return 1;
  let resultado = fibonacci(num - 1) + fibonacci(num-2);
  return resultado;
}

function fibonacciSequence(limit){
  if (limit < 1) return console.log('Limite debe de ser mayor a 1');

  for(let i=0; i<limit; i++){
    debugger
    console.log(fibonacci(i));
  }
}

fibonacciSequence(5);





