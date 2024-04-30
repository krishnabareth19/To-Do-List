const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add");
const taskList = document.getElementById("task-list");
const clearButton = document.getElementById("clear");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        ${taskText}
        <button class="delete">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    const deleteButton = taskItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });
}

function clearCompletedTasks() {
    const completedTasks = taskList.querySelectorAll("li");
    completedTasks.forEach(task => {
        if (task.querySelector("button.delete")) {
            taskList.removeChild(task);
        }
    });
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
clearButton.addEventListener("click", clearCompletedTasks);
