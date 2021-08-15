//Ejemplo
let miPrimeraPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("¡Éxito!");
  }, 250);
});

miPrimeraPromise.then((successMessage) => {
  console.log("¡Sí! " + successMessage);
});


//Otra promesa
const otraPromesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve('Proceso con Exito')}, 2000)
  })
}

otraPromesa().then((mensajeExitoso)=>{
  console.log(mensajeExitoso);
})

//Ejemplo
const foo = (status) => {
  return new Promise((resolve,reject) => {
    // Async operations...
    if(status==="Exitoso"){
      resolve('Exitoso');
    }else{
      reject('Fallido');
    }
  })
}

foo("Exitoso").then(value => console.log(`Proceso 1 ${value}`)); // value created in foo()
foo("Otra cosa").catch(error => console.log(`Proceso 2 ${error}`)) // error produced in foo()