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

// let newHeading = document.createElement('h2');

// // newHeading.setAttribute('id', 'task-title');
// // newHeading.textContent = 'Task-Listing';

// newHeading.appendChild(document.createTextNode('Task-List'));

// newHeading.id = 'task-title';

// let oldHeading = document.querySelector('#task-title');

// let main = document.querySelector('.card-action');

// main.replaceChild(newHeading, oldHeading);

// val = main;

// const clearBtn = document.querySelector('.clear-tasks');

// const card = document.querySelector('.card-action');

// val = clearBtn;

// // clearBtn.addEventListener('click', clear);
// // clearBtn.addEventListener('dblclick', clear);

// let status = card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     console.log(`Event: ${e.type}`);

//     header.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
//     card.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 0)`;
// }

const card = document.querySelector('.card');
const taskList = document.querySelector('ul.collection');
const header = document.querySelector('h5');
const form = document.querySelector('form');
const input = document.querySelector('#task');

const addTask = document.querySelector('input.btn');

input.value = '';

form.addEventListener('submit', addEvent);

document.body.addEventListener('click', deleteEvent);

// input.addEventListener('keyup', runEvent);

function addEvent(e) {
    const newTask = document.createElement('li');
    const link = document.createElement('a');
    const icon = document.createElement('i');

    icon.classList = 'fa fa-remove';

    link.classList = 'delete-item secondary-content';
    link.appendChild(icon);

    newTask.className = 'collection-item';

    newTask.textContent = input.value;

    newTask.appendChild(link);
    console.log(newTask);

    taskList.append(newTask);
    e.preventDefault();

    // console.log(`EVENT TYPE: ${e.type}`);
    // console.log(e.target.value);
    // header.textContent = e.target.value;
}

function deleteEvent(evt) {
    if (evt.target.parentElement.classList.contains('delete-item')) {
        evt.target.parentElement.parentElement.remove();
    }
}

// console.log(val);

// console.log(val);

// console.log(val);