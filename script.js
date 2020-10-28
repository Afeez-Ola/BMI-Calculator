const card = document.querySelector('.card');
const taskList = document.querySelector('ul.collection');
const header = document.querySelector('h5');
const form = document.querySelector('form');
const input = document.querySelector('#task');
const clearBtn = document.querySelector('a.clear-tasks');
const filter = document.querySelector('#filter');
const addTask = document.querySelector('input.btn');

input.value = '';

eventsListeners();

function eventsListeners() {
    form.addEventListener('submit', addEvent);
    document.addEventListener('DOMContentLoaded', getTask);
    document.body.addEventListener('click', deleteEvent);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTask);

    // e.preventDefault();
}

function addEvent(e) {
    const newTask = document.createElement('li');
    const link = document.createElement('a');
    const icon = document.createElement('i');
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
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;

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
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTask() {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const newTask = document.createElement('li');
        const link = document.createElement('a');
        const icon = document.createElement('i');
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