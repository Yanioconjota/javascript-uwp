var a = 3 + 4;

function add(a, b) {
  //return a + b;
  console.log(a + b);
}

add(3, 4);
//7

function isGreater(a, b) {
  console.log(a > b);
}

isGreater(3, 4);
//false

function calculationExample(a, b, c) {
  console.log(a + b * c);
}

calculationExample(3, 4, 5);
//23

function calculationExample2(a, b, c) {
  console.log(a * b * c);
}

calculationExample2(3, 4, 5);
//60 --> 3 * 4 = 12 --> 12 * 5

var a = 2,
  b = 3,
  c = 4;
a = b = c;
console.log(a); //4
console.log(b); //4
console.log(c); //4

var d = (3 + 4) * 5;
console.log(d);
//35

var e = 1 + "2";
console.log(e);
//12

var a = ("b" + "a" + NaN + "a" + "s").toLocaleLowerCase();
console.log(a);
//'bananas'
