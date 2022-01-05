//function statement
function greet(name) {
  console.log(`Hello ${name}! from a function statment`);
}

greet('Homero');

//function expression
var greetFunct = function (name) {
  console.log(`Hello ${name}! from a function expression`);
}
greetFunct("Homero");

//inmediately invoked function expression IIFE
var greeting = function (name) {
  console.log(`Hello ${name}! from an IIFE`);
}('Homero');

var greetingReturn = (function (name) {
  return `Hello ${name}!  from another IIFE`;
})("Homero");

console.log(greetingReturn);

var firstname = "Homero";

(function (name) {
  var greeting = "Inside IIFE: Hello";
  console.log(`${greeting} ${name}!`);
}(firstname));

//scope isolation --> revisar


