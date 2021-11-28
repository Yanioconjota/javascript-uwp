var person = new Object();

//los [] son operators --> Computer Member Access se utilizan para almacenar espacio en memoria y tienen alto nivel de precedencia

//Computer member access son los miembros del objeto
person["firstName"] = "Homero";
person["lastName"] = "Thompson";

var firstNameProperty = "firstName";
console.log(person);
console.log(person[firstNameProperty]);
console.log(person.lastName);

person.address = new Object();
person.address.street = "Maipú 900";
person.address.city = "CABA";
person.address.state = "Buesnos Aires";
person.address.country = "Argentina";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["country"]);

