var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

//don't do this ever
john.__proto__ = person;
console.log(person.getFullName()); //Default Default
console.log(john.getFullName()); //John Doe
console.log(john.firstname); //John

for (const prop in john) {
  if (john.hasOwnProperty('firstname')) {
    console.log(`${prop}: ${john[prop]}`);
  }
}

var pam = {
  address: '111 Main St.',
  getFormalFullName: function() {
     return `${this.firstname} ${this.lastname}`; 
  }
};

var jim = {
  getFirstName: function() {
    return firstname;
  }
};

//extend con underscore --> recibe un objeto como primer argumento y le agrega propiedades y métodos de los objetos que so suceden en la lista de argumentos.

_.extend(john, pam, jim);

console.log(john);

