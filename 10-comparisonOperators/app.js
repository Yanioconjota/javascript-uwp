console.log(1 < 2 < 3);
//true --> 1 < 2 === true --> true === 1 --> 1 < 3
console.log(1 < 2); //true
console.log(true < 3); // Coercionado a 1 --> Number(true)
console.log(1 < 3); //true

console.log(3 < 2 < 1);
//true --> 3 < 2 === false --> false === 0 --> 0 < 1
console.log(3 < 2); //false
console.log(false < 1); //Coercionado a 0 --> Number(false)
console.log(0 < 1); //true

console.log(Number(undefined));//NaN
console.log(Number(null));//0

console.log(3 == 3);//true
console.log(3 == '3');//true
var a = false;
console.log(a == 0);//true
console.log(false == 0);//true
console.log(null == 0);//false
console.log(null < 1);//true
console.log("" == 0);//true
console.log("" == false);//true

console.log(3 === 3);//true
console.log("3"==="3");//true
console.log(3==="3");//false

var c = 0;
var d = false;

if (c == d) {
	console.log('They are equal!');
} if (c !== d) {
	console.log('Nope, they are not strictly equal')
}

