function a() {
	b();
	console.log('a');
}

function b() {
	console.log('b');
}

a();
console.log('c');