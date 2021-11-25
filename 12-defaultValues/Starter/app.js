function greet(name) {
  console.log(name);
  console.log("Hello " + name);
}

greet();
greet("Tony");

console.warn('-------------');

function greet2(name) {
  name = name || '<your name here>';
  console.log(name);
  console.log("Hello " + name);
}

greet2();
greet2("Tony");

console.warn("-------------");

console.log(undefined || 'coerced hello');

