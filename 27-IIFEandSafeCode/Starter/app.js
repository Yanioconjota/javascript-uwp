// IIFE
var firstname = 'John';

(function(global, name) {
    
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
    console.log(global.greeting);
    
}(window, firstname)); // IIFE
console.log(greeting);






















