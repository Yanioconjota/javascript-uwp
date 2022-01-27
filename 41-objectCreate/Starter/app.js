//Pollyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return `Hi ${this.firstname}!`;
  }
};

var jun = Object.create(person);
console.log(jun);//{}
jun.firstname = 'Tony';
jun.lastname = 'Stark';

console.log(jun);//{firstname: 'Tony', lastname: 'Stark'}

console.log(jun.greet());//Hi Tony!

var steve = {
  firstname: 'Steve',
  lastname: 'Rogers'
};

console.log(person.greet.apply(steve));//H1 Steve!