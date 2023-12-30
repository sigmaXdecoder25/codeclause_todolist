document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add");
    const taskList = document.getElementById("taskList");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Toggle Dark Mode
    darkModeToggle.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode");
        document.querySelector(".container").classList.toggle("dark-mode");
        document.querySelector(".theme-toggle").classList.toggle("dark-mode");
    });

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Add a delete button to each task
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete";
            listItem.appendChild(deleteButton);

            // Remove the task when the delete button is clicked
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
        }
    });
});