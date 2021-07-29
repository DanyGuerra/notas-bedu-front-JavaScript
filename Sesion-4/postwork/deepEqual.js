// Funcion deepEqual
 function deepEqual(a, b) {
  if (a===b){
    return true;
  }else if((typeof a === 'object') && (typeof b === 'object')){

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    let valuesA = Object.values(a);
    let valuesB = Object.values(b);

    if(keysA.length != keysB.length){
      return false;
    }else{
      for(let i=0 ; i<keysA.length ; i++){
        if(keysA[i] != keysB[i]){
          return false;
        }
        if(valuesA[i] != valuesB[i]){
          return false;
        }
      }
      return true;
    }
  }else{
    return false;
  }
}

const john = {
 firstName: 'John',
 lastName: 'Doe',

}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe'})) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

