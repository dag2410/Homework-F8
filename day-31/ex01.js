const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskList.onclick = function (e) {
  const taskItem = e.target.closest(".task-item");
  const taskIndex = +taskItem.getAttribute("task-index");
  const task = tasks[taskIndex];
  if (e.target.closest(".edit")) {
    const newTitle = prompt("nhap cong viec moi", task.title);
    task.title = newTitle;
    renderTasks();
    saveTasks();
    return;
  } else if (e.target.closest(".done")) {
    task.complete = !task.complete;
    renderTasks();
    saveTasks();

    return;
  } else if (e.target.closest(".delete")) {
    if (confirm(`Co chac chan xoa ${task.title} khong `)) {
      tasks.splice(taskIndex, 1);
      renderTasks();
      saveTasks();
      return;
    }
  }
};
todoForm.onsubmit = function (e) {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (!value) {
    alert("hay nhap gi do ...");
    return;
  }

  tasks.push({
    title: value,
    complete: false,
  });
  renderTasks();
  saveTasks();
  todoInput.value = "";
};

function renderTasks() {
  const html = tasks
    .map(
      (task, index) => ` <li class="task-item ${
        task.complete ? "completed" : ""
      }" task-index="${index}">
        <span class="task-title">${task.title}</span>
        <div class="task-action">
          <button class="task-btn edit">Sửa</button>
          <button class="task-btn done">${
            task.complete ? "Hoàn thành" : "Chưa hoàn thành"
          }</button>
          <button class="task-btn delete">Xóa</button>
        </div>
      </li>`
    )
    .join("");
  taskList.innerHTML = html;
}

renderTasks();
