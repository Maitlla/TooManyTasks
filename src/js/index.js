// moked data
const tasks = [
    {
        taskName: "* Proyecto curso ",
        completed: false,
        description: "Description ",
    },
    {
        taskName: "* Hacer la compra ",
        completed: true,
        description: "Description ",
    },
    {
        taskName: "* Enviar paquete ",
        completed: false,
        description: "Description ",
    },
]

/**
 * Recibe descripción y estado de la tarea
 * y me entrega el HTML de UNA tarea
 * @param {string} taskName - Nombre de la tarea
 * @param {boolean} completed - Estado de tarea
 * @param {boolean} description - Descripcion de la tarea
 * @returns {string} - <li> HTML resultante
 */

function data2HTML(taskName, completed, description) {
    let completedHTML = completed ? "checked" : "";
    let descriptionHTML = description ? "checked" : "";
    const taskHTML = `
    <table>
        <tr>
            <td>
            <p>
            <button class="seleccionar" id="">Trabajo </button>
            <button class="seleccionar" id="">Estudios </button>
            <button class="seleccionar" id="">Eventos </button>
            <button class="seleccionar" id="">Healthy </button>
            <button class="seleccionar" id="">Hogar </button>
            <button class="seleccionar" id="">Otros </button>
            </p>
            </td>
        </tr> 
        <tr>
            <td>${description}</td>
            <td>${taskName}</td>
            <td><input type="checkbox" name="completed" id="" ${completedHTML}></td>
        </tr> 
        <br />
        <tr>
            <td>
            <span><textarea name="description" id="description" ${descriptionHTML}></textarea></span>  
            </td>
        </tr>
    </table>
    <br />
    <br />
    `;
    return taskHTML
}

function taskListHTML() {
    let HTMLtext = "";
    for (let item of tasks) {
        const HTMLelemento = data2HTML(item.taskName, item.completed, item.description)
        HTMLtext += HTMLelemento;
    }
    return HTMLtext
}

function insertTasksHTML() {
    const ul = document.querySelector("#tasksList");
    ul.innerHTML = taskListHTML();
}



/*
// Defino la clase Tarea para poder crear Objetos de esta clase
class Tarea {
    taskName;
    completed;
    description;
    select;

    // Creo un método constructor para inicializar las propiedades
    constructor(taskName, completed, description) {
        this.taskName = taskName;
        this.completed = completed;
        this.description = description;
        this.select =  queTipoTarea;     new Array(0); // Inicializo el Array que tienen como elementos los tipos de tarea
        
    }    */




window.addEventListener('load', insertTasksHTML)













