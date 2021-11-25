console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(0));//false

var a;
//a = "Hi!";

if (a) {
  console.log("a is type " + typeof a);//string
} else {
  console.log('a is type ' + typeof a);//undefined
}

console.log(false || true);

var b = 0;
if (b || b === 0) {
  console.log('b is ' + b + ' and type ' + typeof b);
  //b is 0 and type number
  //b === 0 --> true --> (false || true) --> true
}