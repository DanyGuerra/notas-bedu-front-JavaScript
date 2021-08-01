//***********************************************Funciones de cada uno de los retos

//Reto 1
function saludar(hora){
  time = hora;
  let greeting
  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good afternoon";
  } else if (time >= 20 && time <= 24) {
    greeting = "Good evening";
  } else if (time > 24) {
    greeting = "Hora invalida";
  }
  return greeting
}
console.log('Funcion saludar:',saludar(10));

/*
- Reto Mariano
- Crea un script en donde dado el diámetro de una rueda y su grosor (en número) y
a través de condicionales if realice las siguientes operaciones:
- Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
- Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
- Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
- Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8,
  con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”

*/

function tamañoRueda(diametro, grosor){
  diametroSup = diametro;
  grosorInferior = grosor;
  let mensaje = '';

  if(diametroSup > 1.4){
    mensaje="La rueda es para un vehiculo grande";
  }else if (diametroSup<=1.4 && diametroSup>0.8){
    mensaje="La rueda es para un vehiculo mediano";
  }else{
    mensaje="La rueda es para un vehiculo pequeño";
  }

  if (((diametroSup > 1.4) && (grosorInferior < 0.4)) || ((diametro<=1.4 && diametro>0.8)&&grosorInferior<0.25)) {
     mensaje = "El grosor para esta rueda es inferior al recomendado"
  }
  return mensaje;
}
console.log("Funcion tamaño de rueda: ", tamañoRueda(2, 0.25))


// Reto 2
//Reto 2 Imprimir numeros pares de 0 al 100
function numerosPares(fin){
  let pares = [];
  for(var i = 0; i<=fin; i++){
    if ( i % 2 == 0){
      pares.push(i);
    }
  }
  return pares;
}

console.log('Función números pares: ', numerosPares(30));


//Reto 3 Numeros primos
function numerosPrimos(fin){
  numerosPrimos = [];
  for (let num = 1; num <= fin; num++) {
    let vecesDivisible = 0;
    for(let j = 1; j <= num; j++){
      if ( num % j == 0){
        vecesDivisible++;
        if (vecesDivisible > 2){
          break;
        }
      }
    }
    if (vecesDivisible == 2) {
      numerosPrimos.push(num);
    }
    vecesDivisible = 0;
  }
  return numerosPrimos;
}
console.log('Función números primos: ', numerosPrimos(30));

