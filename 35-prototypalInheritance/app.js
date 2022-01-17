var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return `${this.firstname} ${this.lastname}`;
  }
};

var john = {
  firstname: 'John',
  lastname: 'Doe'
};

//don't do this ever
john.__proto__ = person;
console.log(person.getFullName());//Default Default
console.log(john.getFullName());//John Doe
console.log(john.firstname);//John

var jane = {
  firstname: 'Jane'
};

jane.__proto__ = person;
console.log(jane.getFullName());// Jane Default





