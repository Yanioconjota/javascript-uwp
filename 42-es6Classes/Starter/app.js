class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return `Hi ${this.firstname}!`;
  }
}

var jun = new Person('Junior', 'Soprano');
console.log(jun);//Person {firstname: 'Junior', lastname: 'Soprano'}
console.log(jun.greet());//Hi Junior!

//extends establece el prototipo (__proto__)
class InformalPerson extends Person {
  constructor(firstname, lastname) {
    //super accesa el constructor de Person
    super(firstname, lastname);
  }

  greet() {
    return `Yo ${this.firstname}!`;
  }
}

var tony = new InformalPerson('Tony', 'Soprano');
console.log(tony);//InformalPerson {firstname: 'Tony', lastname: 'Soprano'}
console.log(tony.greet());//Yo Tony!
