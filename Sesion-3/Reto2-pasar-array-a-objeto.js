//Reto 2 pasar un array a objeto
const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]];
objCar = {};

for(const element of car){
  objCar[element[0]]=element[1];
}
console.log(objCar)