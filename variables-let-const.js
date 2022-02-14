// Start the variables

let job = "Designer";
const firstName = "renato";
const lastName = "costa";
const age = 30;
const capFristName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
const capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

console.log(capFristName);
console.log(capLastName);

const fullName = capFristName + ' ' + capLastName;


job = "Dev";
/* 

const variables you can't change.

const name = "Carlos";
const age = 25;
console.log(name);
console.log(age);

*/



console.log(`My name is ${fullName}`);