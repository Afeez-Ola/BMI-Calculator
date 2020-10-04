// JS esversion: 6
// const person = {
//     name: 'Afeez',
//     age: 18,
//     hobby: 'eating',
//     getBirthYear: function() {
//         return 2020 - this.age;
//     },

//     address: {
//         city: 'Lagos',
//         country: 'Nigeria',
//     },
// };

let val;

// let val = person.getBirthYear();

// val = person.hobby;

// val = person.name;

// val = person.address.city;

// let a = 2;

// a = --a;

// val = a;

// let i = 0;

// while (i < 12) {
//     console.log(`Number ${i}`);
//     i++;
// }

// let students = [
//   'Afeez',
//   'bolaji',
//   'ola',
//   'laura',
//   'krystal',
//   'rufai',
//   'opeyemi',
//   'quadri',
// ];

// students.forEach (function (student, index, array) {
//   if (student === 'bolaji') {
//     console.log ('Head Boy');
//   }
//   console.log (student + ' : ' + index);
//   console.log (array);
// });

// let user = {
//     name: 'Bolaji Ola',
//     age: 18,
//     hobbies: ['eating', 'singing', 'fighting'],
// };

// for (const x in user) {
//     console.log(`${x} : ${user[x]}`);
// }

// val = window.navigator;

// val = document.getElementById('task-title');
// document.querySelector('#task-title').style.color = 'yellow';

// console.log(val.id);

// let items = document.getElementsByClassName('collection-item');

// items = Array.from(items);

// // for (let i = 0; i < items.length; i++) {
// //     let item = items[i];
// //     item.style.color = 'red';
// // }

// items.forEach(item => {
//     item.style.color = 'red';
//     item.textContent = 'World';
// });
// console.log(items);

// let list = document.querySelector('ul.collection');
// let listItem = document.querySelector('li.collection-item');

// val = listItem;
// val = list;

// let li = document.createElement('li');

// li.className = 'collection-item';
// li.setAttribute('id', 'new-item');

// li.textContent = 'Hello world';
// let task = document.querySelector('ul.collection').appendChild(li);

// let link = document.createElement('a');

// link.className = 'delete-item secondary-content';

// link.innerHTML = '<i class="fa fa-remove" />';

// li.appendChild(link);

let newHeading = document.createElement('h2');

// newHeading.setAttribute('id', 'task-title');
// newHeading.textContent = 'Task-Listing';

newHeading.appendChild(document.createTextNode('Task-List'));

newHeading.id = 'task-title';

let oldHeading = document.querySelector('#task-title');

let main = document.querySelector('.card-action');

main.replaceChild(newHeading, oldHeading);

val = main;

console.log(val);