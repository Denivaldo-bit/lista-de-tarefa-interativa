// Constants declared for input button and task list area
const taskInput = document.querySelector("#task-input");
const taskSection = document.querySelector(".task");

// Listener for the Enter key. Used to add a new task
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

// The onclick event for the "Add" button
document.querySelector("#push").onclick = function () {
  createTask();
};

// The function that creates a task
function createTask() {
  if (taskInput.value.trim().length === 0) {
    alert("The task field is blank. Enter a task name and try again.");
  } else {
    // Create a task element dynamically
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");

    taskDiv.innerHTML = `
      <label>
        <input onclick="updateTask(this)" type="checkbox" id="check-task">
        <p>${taskInput.value}</p>
      </label>
      <div class="delete">
        <i class="uil uil-trash"></i>
      </div>
    `;

    // Add delete functionality
    taskDiv.querySelector(".delete").onclick = function () {
      taskDiv.remove();
    };

    // Append the task to the taskSection
    taskSection.appendChild(taskDiv);

    // Clear the input
    taskInput.value = "";

    // Handle overflow if necessary
    if (taskSection.offsetHeight >= 300) {
      taskSection.classList.add("overflow");
    } else {
      taskSection.classList.remove("overflow");
    }
  }
}

// Function to update the task status
function updateTask(task) {
  const taskItem = task.nextElementSibling; // The <p> element
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}
