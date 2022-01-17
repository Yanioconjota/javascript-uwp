function Person() {
  console.log(this); //Person {}
  this.firstname = "John";
  this.lastname = "Doe";
  console.log("this function is invoked");
  //return { greetings: 'I got in the way...' };
}

var john = new Person();
console.log(john); //Person {firstname: 'John', lastname: 'Doe'}

var jane = new Person();
console.log(jane); //Person {firstname: 'John', lastname: 'Doe'}

function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var homero = new Student("Homero", "Simpson");
console.log(homero); //Student {firstname: 'Homero', lastname: 'Simpson'}

Person.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

console.log(john.getFullname());//John Doe

var fillPrototype = function(obj) {
  obj.prototype.getFullname = function(){
    console.log(`${this.firstname} ${this.lastname}`);
  }
};

fillPrototype(Student);
homero.getFullname();//Homero Simpson

console.log(Student.prototype);//{getFullname: ƒ, constructor: ƒ}
