// Reto 1
const time = 30;
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
console.log(greeting) // Good afternoon