function makeGreetings(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log(`Hello ${firstname} ${lastname}`);
    }

    if (language === "es") {
      console.log(`Hola ${firstname} ${lastname}`);
    }
  }
}

var greetEnglish = makeGreetings('en');
var greetSpanish = makeGreetings('es');

greetEnglish('Tony', 'Soprano');// Hello Tony Soprano
greetSpanish('Homero', 'Thompson');// Hola Homero Thompson
