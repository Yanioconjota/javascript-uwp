//by value (primitivos)
var a = 3;
var b;

b = a;
a = 2;
console.log(a)//2
console.log(b);//3

//by reference (objects, incluso funciones)
var c = { greetings: 'hi' };
var d;

d = c;
c.greetings = 'hello';
console.log(d)//{ greetings: 'hello' }

//by reference (incluso como parametro)
function changeGreeting(obj) {
  obj.greetings = 'Hola';//mutate
}

changeGreeting(d);
console.log(c);//{greetings: 'Hola'}
console.log(d);//{greetings: 'Hola'}

// el operador igual asigna un nuevo espacio de memoria
// una nueva dirección
c = { greetings: 'Howdy' };
console.log(c);//{greetings: 'Howdy'}
console.log(d);//{greetings: 'Hola'}
