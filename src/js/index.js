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
            <input type="submit" value="Trabajo" name="select">
            <input type="submit" value="Estudios" name="select">
            <input type="submit" value="Eventos" name="select">
            <input type="submit" value="Hogar" name="select">
            <input type="submit" value="Otros" name="select">
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

window.addEventListener('load', insertTasksHTML)













