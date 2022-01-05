function greet(whattosay) {
  return function(name) {
    console.log(`${whattosay} ${name}`);
  }
}

greet('Hola')('Homero'); //Hola Homero

var sayHi = greet('Hi');
sayHi('Tony');// Hi Tony
