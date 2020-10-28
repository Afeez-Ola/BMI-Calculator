"use strict";

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

function eventsListeners() {
  form.addEventListener('submit', addEvent);
  document.addEventListener('DOMContentLoaded', getTask);
  document.body.addEventListener('click', deleteEvent);
  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTask);
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
  input.value = '';
  e.preventDefault();
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

  if (localStorage.getItem('tasks') === null) {
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
    taskList.append(newTask);
  });
}