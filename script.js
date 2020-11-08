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

function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.greeting = function() {
    return `Hello there, ${this.fName} ${this.lName}`;
};

const person1 = new Person('Bolaji', 'Ola');

function Customer(fName, lName, phone, membership) {
    Person.call(this, fName, lName);
    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);

const customer1 = new Customer('Salim', 'More', '07042280970', 'Silver');

console.log(customer1.greeting());

console.log(person1.greeting());