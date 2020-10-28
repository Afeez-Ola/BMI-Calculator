"use strict";

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
var val; // let val = person.getBirthYear();
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

var card = document.querySelector('.card');
var taskList = document.querySelector('ul.collection');
var header = document.querySelector('h5');
var form = document.querySelector('form');
var input = document.querySelector('#task');
var clearBtn = document.querySelector('a.clear-tasks');
var filter = document.querySelector('#filter');
var addTask = document.querySelector('input.btn');
input.value = '';
eventsListeners();

function eventsListeners(e) {
  form.addEventListener('submit', addEvent); // document.addEventListener('DOMContentLoaded', getTask);

  document.body.addEventListener('click', deleteEvent);
  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTask); // e.preventDefault();
}

function addEvent(e) {
  var newTask = document.createElement('li');
  var link = document.createElement('a');
  var icon = document.createElement('i');
  icon.classList = 'fa fa-remove';
  link.classList = 'delete-item secondary-content';
  link.style.cursor = 'pointer';
  link.appendChild(icon);
  newTask.className = 'collection-item';
  newTask.textContent = input.value;
  newTask.appendChild(link);

  if (input.value === '') {
    alert('Add a Task Please!');
  } else {
    taskList.append(newTask);
  }

  setLocalStorage(input.value);
  input.value = ''; // e.preventDefault();
}

function deleteEvent(evt) {
  if (evt.target.parentElement.classList.contains('delete-item')) {
    evt.target.parentElement.parentElement.remove();
  }
}

function filterTask(e) {
  var text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    var item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function clearTask(e) {
  taskList.innerHTML = '';
  console.log('task cleared' + e);
  e.preventDefault();
}

function setLocalStorage(task) {
  var tasks;

  if (localStorage.getItem('tasks' === null)) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTask() {
  var tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    var newTask = document.createElement('li');
    var link = document.createElement('a');
    var icon = document.createElement('i');
    icon.classList = 'fa fa-remove';
    link.classList = 'delete-item secondary-content';
    link.style.cursor = 'pointer';
    link.appendChild(icon);
    newTask.className = 'collection-item';
    newTask.textContent = task;
    newTask.appendChild(link);

    if (input.value === '') {
      alert('Add a Task Please!');
    } else {
      taskList.append(newTask);
    }
  });
} // console.log(val);
// console.log(val);
// console.log(val);