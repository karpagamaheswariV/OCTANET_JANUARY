// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `<span>${taskInput.value}</span> <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}
