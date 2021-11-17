var a;
console.log(a);
if (a === undefined) {
  console.log('a is undefined!');
}
else {
  console.log('a is defined!');
}

var b = 'Hello world!';
console.log(b);

b = undefined; //Never do this!

if (b === undefined) {
  console.log('b is undefined!');
}
else {
  console.log('b is defined!');
}