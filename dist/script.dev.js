"use strict";

// function Player(name, age, position, country) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.country = country;
// }
// const ronaldo = new Player('Ronaldo', 37, 'Winger', 'Portugal');
// const messi = new Player('Messi', 36, 'Midfielder', 'Argentina');
// const ighalo = new Player('Ighalo', 34, 'Striker', 'Nigeria');
// console.log(ighalo);
// function Man(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;
// }
// const james = new Man('john', 'james');
// Man.prototype.fullName = function() {
//     return this.fName + ' ' + this.lName;
// };
// Man.prototype.getMarried = function(newLName) {
//     return (this.lName = newLName);
// };
// const mary = new Man('Mary', 'Smith');
// mary.getMarried('Jackson');
// console.log(mary.fullName());
// console.log(mary.hasOwnProperty('fullName'));
// function Person(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;
// }
// Person.prototype.greeting = function() {
//     return `Hello there, ${this.fName} ${this.lName}`;
// };
// const person1 = new Person('Bolaji', 'Ola');
// function Customer(fName, lName, phone, membership) {
//     Person.call(this, fName, lName);
//     this.phone = phone;
//     this.membership = membership;
// }
// Customer.prototype = Object.create(Person.prototype);
// Customer.prototype.Constructor = Customer;
// Customer.prototype.greeting = function() {
//     return `Hello there, ${this.fName} ${this.lName}. Welcome to our Company`;
// };
// const customer1 = new Customer('Salim', 'More', '07042280970', 'Silver');
// console.log(customer1.greeting());
// console.log(customer1);
// console.log(person1.greeting());
// const personPrototypes = {
//     greeting: function() {
//         return `Hello there, ${this.fName} ${this.lName}`;
//     },
//     getMarried: function(newLName) {
//         this.fName = newLName;
//     },
// };
// const bolaji = Object.create(personPrototypes);
// bolaji.fName = 'Bolaji';
// bolaji.lName = 'Ola';
// const laura = Object.create(personPrototypes, {
//     fName: { value: 'Laura' },
//     lName: { value: 'Charles' },
// });
// bolaji.getMarried('charles');
// console.log(laura.greeting());
// console.log(bolaji.greeting());
// console.log(laura.greeting())
var personPrototypes = {
  greeting: function greeting() {
    return "Hello there, ".concat(this.fName, " ").concat(this.lName);
  },
  getDrunk: function getDrunk(newLName) {
    this.fName = newLName;
  }
}; // const ronnie = Object.create(personPrototypes);
// ronnie.fName = 'Ronnie';
// ronnie.lName = 'Koeman';

var ronnie = Object.create(personPrototypes, {
  fName: {
    value: 'Ronnie'
  },
  lName: {
    value: 'Koeman'
  }
});
ronnie.getDrunk('Drunken');
console.log(ronnie.greeting()); // const personPrototypes = {
//     greeting: function() {
//         return `Hello there, ${this.fName} ${this.lName}`;
//     },
//     getDrunk: function(newLName) {
//         this.fName = newLName;
//     },
// };
// const ronnie = Object.create(personPrototypes);
// ronnie.fName = 'Ronnie';
// ronnie.lName = 'Koeman';
// ronnie.getDrunk('Drunken');
// console.log(ronnie.greeting());