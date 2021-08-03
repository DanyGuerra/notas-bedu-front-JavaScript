const Person = function(name,edad,altura) {
  this.name = name;
  this.school = 'bedu';
  this.edad = edad;
  this.altura = altura;
}

const Developer = function(name, skills, yearsOfExperience, edad, altura) {
  Person.call(this, name, edad, altura);

  this.skills = skills;
  this.yearsOfExperience = yearsOfExperience;
}

const luis = new Developer('Luis', 'JavaScript', 2, 23, 1.69);

console.log( luis );
