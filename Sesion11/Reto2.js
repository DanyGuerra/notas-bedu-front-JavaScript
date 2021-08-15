async function fn() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 'Hello World';
}

function log() {
  // Code goes here...
  fn().then(result => console.log(result));
}

log()
