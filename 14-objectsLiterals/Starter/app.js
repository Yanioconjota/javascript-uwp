var Homero = {
  firstName: 'Homero',
  lastName: 'Thompson',
  address: {
    street: 'Maipú 900',
    city: 'CABA',
    state: 'Buenos Aires',
    country: 'Argentina'
  }
};
console.log(Homero);

function greet(person) {
  console.log('Hi ' + person.firstName);
}

greet(Homero);
greet({
  firstName: 'Margo',
  lastName: 'Zavala'
});

Homero.address2 = {
  street: 'Avenida Siempreviva 742',
  city: 'Springfield',
  country: 'USA'
}

console.log(Homero.address2);