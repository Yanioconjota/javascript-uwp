var person = {
  firstname: 'Tony',
  lastname: 'Soprano',
  getFullName: function() {
    var fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
  }
};

var person2 = {...person};
person2.firstname = 'John';
person2.lastname = 'Rambo'

var person3 = { ...person };
person3.firstname = "Rick";
person3.lastname = "Sanchez";

var logName = function (lang1, lang2) {
  console.log(`logged: ${this.getFullName()}`);
  console.log(`arguments: ${lang1} ${lang2}`);
  console.log('-----------------------------');
}

var logPersonName = logName.bind(person);

logPersonName('br', 'en');//logged: Tony Soprano --> arguments: br en

var logName2 = function (lang1, lang2) {
  console.log(`logged: ${this.getFullName()}`);
  console.log(`arguments: ${lang1} ${lang2}`);
  console.log("-----------------------------");
}.bind(person2);

logName2('en', 'es');//logged: John Rambo --> arguments: en es

logName.call(person, 'ita', 'en');//logged: Tony Soprano --> arguments: ita en

logName.apply(person2, ['br', 'gr']);//logged: John Rambo --> arguments: ita gr


(function (lang1, lang2) {
  console.log(`logged: ${this.getFullName()}`);
  console.log(`arguments: ${lang1} ${lang2}`);
  console.log('-----------------------------');
}).apply(person3, ['en', 'gr']);


//function borrowing
var person4 = {
  firstname: 'James',
  lastname: 'Howlett'
}

console.log(person.getFullName.apply(person4));//James Howlett

//Function currying

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);

// Esto es igual a:

/* function multiply(b) {
  var a = 2;
  return a * b;
} */

console.log(multipleByTwo(8));//16

