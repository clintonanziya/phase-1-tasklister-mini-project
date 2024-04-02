document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value entered by the user in the input field
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    // Display the task description in the DOM
    const taskList = document.getElementById("tasks");
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    taskInput.value = "";
  });
});
