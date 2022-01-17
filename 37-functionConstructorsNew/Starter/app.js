function Person() {
  console.log(this)//Person {}
  this.firstname = 'John';
  this.lastname = 'Doe';
  console.log('this function is invoked');
  //return { greetings: 'I got in the way...' };
}

var john = new Person();
console.log(john);//Person {firstname: 'John', lastname: 'Doe'}

var jane = new Person();
console.log(jane);//Person {firstname: 'John', lastname: 'Doe'}

function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var homero = new Student("Homero", "Simpson");
console.log(homero);//Student {firstname: 'Homero', lastname: 'Simpson'}

