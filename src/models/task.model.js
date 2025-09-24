// consultar una tarea en concreto
// actualizar el titulo de la tarea
// completar y descompletar la tarea

const { randomUUID } = require('node:crypto');

let tasks = [
    {id: randomUUID(), title: "Aprender API REST", completed: false},
    {id: randomUUID(), title: "Utilizar el MVC en Api Rest", completed: false},
];

function findTask(id){
    const index = tasks.findIndex(item => item.id === id);
    return tasks[index];
}

function findAll() {
    return tasks;
}

function addTask(title) {
    const task = {
        id: randomUUID(), 
        title: title, 
        completed: false
    };
    tasks.push(task);
    return task;
}

function removeTask(id) {
    const index = tasks.findIndex(item => item.id === id);//se asegura que el valor de entrada coindida con el de búsqueda
    if (index === -1) return false;
    tasks.splice(index, 1); //guardamos un elemento a partir del indice
    return true;
}

function updateTask(id, title) {
    const index = tasks.findIndex(item => item.id === id);
    if (index === -1) return false;
    tasks[index].title = title;
    return tasks[index];
}

function alterTask(id) {
    const index = tasks.findIndex(item => item.id === id);
    if (index === -1) return false;
    tasks[index].completed = !tasks[index].completed;
    return tasks[index];
}

module.exports = {findTask, findAll, addTask, removeTask, updateTask, alterTask};