// Reto MARIANO
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


var diametroSup = 2;
var grosorInferior = 0.25;

mensaje = '';
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
console.log(mensaje)

