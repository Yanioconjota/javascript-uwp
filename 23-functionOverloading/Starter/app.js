function greet(firstname, lastname, language) {
	language = language || 'en';

	if (language === 'en') {
		console.log(`Hello ${firstname} ${lastname}`);
	}

	if (language === "es") {
    console.log(`Hola señor ${lastname}... Creo que le habla a usted`);
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, "es");
}

greetEnglish("John", "Rambo");//Hello John Rambo
greetSpanish("Homero", "Thompson");//Hola señor Thompson... Creo que le habla a usted
