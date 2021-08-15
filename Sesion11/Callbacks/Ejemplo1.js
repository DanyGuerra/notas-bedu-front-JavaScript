//*******************Ejemplo 1 */
// setTimeout(() => console.log('Hello World'), 1000);

//*******************Ejemplo 2 */
// const callback = () => console.log('Hello World');
// setTimeout(callback, 1000);

//*******************Ejemplo 3*/
const callback = () => console.log('World');
setTimeout(callback, 0);
console.log('Hello');

