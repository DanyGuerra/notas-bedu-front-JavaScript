//Reto 2
function createPhoneNumber(array){
  let phone= '';
  for(let i=0; i<array.length; i++){
    phone += array[i];
  }
  phone = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`
  return phone;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([4, 6, 4, 1, 6, 6, 6, 7, 9, 0])); // "(464) 166-6790"