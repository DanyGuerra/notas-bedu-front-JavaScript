//*              Ejemplo de dos formas agregar metodos usando funcion constructora y Prototype
const Person1 = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;

  //Metodo desde Funcion constructora
  this.saludarFC = function(){
    return `Saludos ${this.name}, desde funcion constructora`
  }
}

// Metodo usando prototype
Person1.prototype.calculateAge = function() {
  const today = new Date();
  const year = today.getFullYear();

  console.log( year - this.birthYear );
}

Person1.prototype.saludarPR = function() {
  return `Saludo ${this.name}, usando Prototype`;
}

//Creando objeto
let luis = new Person1('Luis', 1997, 'Student');
console.log(luis);
console.log(luis.saludarFC());
console.log(luis.saludarPR());
luis.calculateAge();




//*Formas de crear clases
//Usando funcion constructora
const PersonFC = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

PersonFC.prototype.calculateAge = function() {
  const today = new Date();
  const year = today.getFullYear();

  console.log( year - this.birthYear );
}

const pedro = new PersonFC('Pedro', 1996, 'Developer');
console.log('Imprimiendo obejto usando funcion constructora: ', pedro);


//Usando la palabra class

class PersonC {
  constructor(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
  }

  calculateAge() {
    const today = new Date();
    const year = today.getFullYear();
    console.log( year - this.birthYear );
  }
}

const Juan = new PersonC('Juan', 1970, 'Engineer');
console.log('Imprimiendo obejto usando class: ', Juan);