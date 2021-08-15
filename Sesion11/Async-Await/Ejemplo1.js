// Al usar async en una funcion siempre devuelve una promesa
async function foo() {
  //Es lo mismo usar: return Promise.resolve('Hello World');
  return 'Hello World';
}

foo().then(value => console.log(value)) // Hello World


// await solo se puede usar dentro de funciones asincronas y espera que una promesa sea resuelta

const foo2 = ()=> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello World 2'), 1000)
  })
}

async function bar() {
  let result = await foo2()

  console.log(result)
}

bar()


//se usa try and catch para promesas rechazadas
function foo3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('Failed'), 1000)
  })
}

async function bar3() {
  try {
    let result = await foo3()
  } catch (e) {
    console.log(e)
  }
}

bar3()

