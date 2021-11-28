var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);//Hola!

var english = {};
var spanish = {};
var italian = {};
var portuguese = {
  greetings: {
    basic: 'Olá'
  }
}

english.greet = 'Hello!';
spanish.greet = "Hola!";

console.log(english);//Object { greet: "Hello!" }
console.log(spanish);//Object { greet: "Hola!" }

/* italian.greetings.greet = 'Ciao!';
console.log(italian);
//Uncaught TypeError: italian.greetings is undefined */
console.log(portuguese);


