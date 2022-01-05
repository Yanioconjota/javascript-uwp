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

var logName = function (lang1, lang2) {
  console.log(`logged: ${this.getFullName()}`);
}

var logPersonName = logName.bind(person);

logPersonName();//logged: Tony Soprano

var logName2 = function (lang1, lang2) {
  console.log(`logged: ${this.getFullName()}`);
}.bind(person2);

logName2();//logged: Tony Soprano