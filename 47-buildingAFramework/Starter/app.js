/*
//1 - creo una variable y le asigno la ejecución de mi alias de Greetr 
var g = G$('Homero', 'Thompson');
//2 - invoco el método saludar encadenándole distintas ejecuciiones
g.greet().setLang('es').greet(true);//Hello Homero!
//g.setLang('gr').greet();//Uncaught Invalid language

g.greet().setLang('en').log();//Logged in: Homero Thompson
*/

$('#login').bind('click', function(){

  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val(); 
  var lang = $("#lang").val();
  var formal = $("#formal").is(":checked");

  var g = G$(firstName, lastName);

  g.setLang(lang).HTMLgreeting("#greeting", formal).log();
});