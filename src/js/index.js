// moked data
const tasks = [
    {
        taskName: "Proyecto curso ",
        completed: false,
        description: "Descripción",
        tipo: "Trabajo"
    },
]

/**
 * Recibe descripción y estado de la tarea
 * y me entrega el HTML de UNA tarea
 * @param {string} taskName - Nombre de la tarea
 * @param {boolean} completed - Estado de tarea
 * @param {string} description - Descripcion de la tarea
 * @param {string} tipo - Descripcion de la tarea
 * @returns {string} - <li> HTML resultante
 */

function data2HTML(taskName, completed, description, tipo) {
    let checked = completed ? "checked" : "";
    const resultadoHtml = `
    <li class="linea">
        <input type="hidden" value="${taskName}" />
        <div class="espacio fuente cursiva">${tipo}</div>
        <div class="elNombre fuente">* ${taskName}</div>
        <div class="elCheck haciaDerecha">
            <input type="checkbox" name="completed" ${checked}>
        </div>
        <div class="espacio fuente">${description}</div>
        <div>
            <textarea name="description" id="description"></textarea>
        </div>
    </li>
    `;
        
    }

    return resultadoHtml
}

function taskListHTML() {
    let HTMLtext = "";
    for (let item of tasks) {
        const HTMLelemento = data2HTML(item.taskName, item.completed, item.description, item.tipo);
        HTMLtext += HTMLelemento;
    }
    return HTMLtext;
}

// No mantiene tareas y check

function capturarEventoClickDelBotonAnadir() {
    const botonAnadir = document.querySelector("#botonAnadir")
    botonAnadir.addEventListener('click', function (event) {
        const taskNameValue = document.querySelector("#taskName").value;
        const tipoValue = document.querySelector("#tipo").value;

        const task =
        {
            taskName: taskNameValue,
            completed: false,
            description: "Descripción",
            tipo: tipoValue
        };

        tasks.unshift(task);
        insertTasksHTML();
    });
}


function capturarEventosDeLasTareasMostradas() {
    // Caputrar eventos de los checkbox
    const checks = document.querySelectorAll('input[type=checkbox]');
    checks.forEach(check => {
        check.addEventListener('change', function (event) {
            const taskName = check.parentElement.parentElement.querySelector("input[type=hidden]").value;
            const completedValue = check.checked;
            const tarea = buscarTarea(taskName);
            tarea.completed = completedValue;
        });
    });

    // Capturar eventos de los textarea
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        // Hay que tener en cuenta que el evento "change" del textarea se lanza cuando sales del textarea
        textarea.addEventListener('change', function (event) {
            const taskName = textarea.parentElement.parentElement.querySelector("input[type=hidden]").value;
            const descripcionValue = textarea.value;
            const tarea = buscarTarea(taskName);
            tarea.description = descripcionValue;
        });
    });
}   

function buscarTarea(taskNameParam) {
    for (let i = 0; i < tasks.length; i++) {
        const tarea = tasks[i];
        if (tarea.taskName === taskNameParam) {
            return tarea;
        }
    }
}

function insertTasksHTML() {
    const ul = document.querySelector("#tasksList");
    ul.innerHTML = taskListHTML();
    capturarEventosDeLasTareasMostradas();
}

function onLoad() {
    insertTasksHTML();
    capturarEventoClickDelBotonAnadir();
}


window.addEventListener('load', onLoad);



/*
// Defino la clase Tarea para poder crear Objetos de esta clase
class Tarea {
    taskName;
    completed;
    description;
    tipo;

    // Creo un método constructor para inicializar las propiedades
    constructor(taskName, completed, description, tipo) {
        this.taskName = taskName;
        this.completed = completed;
        this.description = description;
        this.tipo = tipo;     
        
    }    

    function Tareas(taskName, completed, description, tipo) {
        this.taskName = taskName;
        this.completed = completed;
        this.description = description;
        this.tipo = tipo;
      }

*/








