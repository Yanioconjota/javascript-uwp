function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

//1 --> EC Global
//2 --> EC a()
//undefined --> EC b()
//1 --> EC Global
