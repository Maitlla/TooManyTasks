
const taskListHTMLSelector = "#tasksList";
const addTaskButtonSelector = "#addTaskButton";
const tasksListSelector = "#tasksList";
const tasksStorageKey = "tasks"

const input = document.querySelector("#taskInput");
const button = document.querySelector("#addTasksButton");


function getTasks() {
    const stringData = localStorage.getItem(tasksStorageKey) || "[]";
    return JSON.parse(stringData);
}

function saveTasks(tasksArray) {
    const stringData = JSON.stringify(tasksArray)
    return localStorage.setItem(tasksStorageKey, stringData);
}

function addTasks(taskObject) {
    const tasks = getTasks() || [];
    tasks.push(taskObject);
    saveTasks(tasks);
}

function taskAddButtonClickHandler(event) {
    //console.log(event)
    event.preventDefault()
    const newTask = {
        taskName: input.value,
        completed: false,
    };
    addTasks(newTask);
    replaceTasks(taskListHTMLSelector, getTasks());
}

replaceTasks(taskListHTMLSelector, getTasks());

button.addEventListener("click", taskAddButtonClickHandler);


/**
 * Recibe descripción y estado de la tarea
 * y me entrega el HTML de UNA tarea
 * @param {string} taskName - Descripcion de la tarea
 * @param {boolean} completed - Estado de tarea
 * @returns {string} - <li> HTML resultante
 */

function task2HTMLElement(task) {

    // Creo los elementos HTML
    const listHTMLItem = document.createElement("li");
    const pHTMLItem = document.createElement("p");
    const inputCheckboxHTMLItem = document.createElement("input");

    // Les proporciono valores 
    inputCheckboxHTMLItem.type = "checkbox";
    inputCheckboxHTMLItem.checked = task.completed;
    pHTMLItem.innerHTML = task.taskName

    // Los anido
    listHTMLItem.appendChild(pHTMLItem);
    listHTMLItem.appendChild(inputCheckboxHTMLItem);

    // Añado el manejador de eventos
    inputCheckboxHTMLItem.addEventListener(
        "click",
        () => { console.log(listHTMLItem) }
    )

    return listHTMLItem
}

function replaceTasks(selector, tasksArray) {
    const listHTMLElement = document.querySelector(selector);
    listHTMLElement.innerHTML = ""
    for (let item of tasksArray) {
        listHTMLElement.appendChild(task2HTMLElement(item))
    }
}







//const taskHTML1 = '<li>' + taskName + '</p><input type="checkbox" name="completed" id=""' + completed + '></li>';

/*
const mappedTask = tasks.map(
    (task) => `
        <li>
            <p>${task.taskName}</p>
            <input
                type="checkbox"
                name="completed"
                id="" ${task.completed ? "checked" : ""}>
        </li>`
)

console.log("With map:", JSON.stringify(mappedTask))
*/