greet();//hi
//function statement
function greet() {
  console.log('hi');
}
//function expression
//anonymousGreet();//undefined is not a function
var anonymousGreet = function() {
  console.log('hi');
}
anonymousGreet();

function log(a) {
  console.log(a);
}
function logAlt(a) {
  a();
}

log(3);
log('hello');
log({
  grettings: 'hi'
});
log(['1','2','3']);
log(function(){
  console.log('function within a function');
});
log(function () {
  console.log("function within a function");
  /* function log(a) {
    console.log(a); //undefined --> function within a function
  } */
}());

logAlt(function () {
  console.log("function within a function");
});