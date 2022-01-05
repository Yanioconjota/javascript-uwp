function greet(firstname, lastname, language, ...other) {
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing parameters');
    console.log('----------');
    return;
  }
  
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log(`arguments[0]: ${arguments[0]}`);
  console.log('-----------');
}

greet();
greet('Chorizo');
greet('Chorizo','Perro');
greet('Chorizo','Perro','bark', 'Yara', 'Costa Del Mar');

