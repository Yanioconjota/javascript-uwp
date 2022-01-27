var a = new Number(3);
console.log(a);//Number {3}
//el valor de a no es un primitivo

var b = new String('Homero');
console.log(b);//String {'Homero'}

var c = new Date('01/27/2022');
console.log(c);//Thu Jan 27 2022 00:00:00 GMT-0300 (Argentina Standard Time)

String.prototype.isGreatherThan = function(limit) {
  //this apunta a String
  return this.length > limit;
}
//Por herencia todos los strings tienen acceso al método isGreatherThan
console.log('Tony'.isGreatherThan(3));//true

Number.prototype.isPositive = function() {
  return this > 0;
}

//console.log(15.isPositive()); //Uncaught SyntaxError: Invalid or unexpected token

var d = new Number(15);
console.log(d.isPositive());//true

var numA = 3;

var numB = new Number(3);

console.log(numA == numB);//true

console.log(numA === numB);//false

var numC = Number("3");

console.log(numC);

console.log(numA === numC);//true