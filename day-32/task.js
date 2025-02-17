const tasks = document.getElementById("tasks");
let taskList = [];

fetch("http://localhost:3000/tasks")
  .then((res) => res.json())
  .then((data) => {
    taskList = data;
    renderTasks();
  });

function handleClick() {
  if (confirm("Bạn có chắc thêm công việc mới không?")) {
    let id = prompt("Nhập ID công việc:");
    if (isNaN(id)) {
      alert("ID công việc phải là số!");
      return;
    }
    if (taskList.some((task) => task.id == id)) {
      alert("ID công việc đã tồn tại! Vui lòng nhập ID khác.");
      return;
    }
    let title = prompt("Nhập tiêu đề công việc:");
    let status = prompt("Nhập trạng thái công việc (todo, doing, done):");
    if (!["todo", "doing", "done"].includes(status.toLowerCase())) {
      alert(
        "Trạng thái không hợp lệ! Chỉ được nhập 'todo', 'doing' hoặc 'done'."
      );
      return;
    }
    let priority = parseInt(
      prompt("Nhập mức độ ưu tiên (1: thấp, 2: trung bình, 3: cao):")
    );
    if (![1, 2, 3].includes(priority)) {
      alert("Mức độ ưu tiên không hợp lệ! Chỉ được nhập 1, 2 hoặc 3.");
      return;
    }
    if (!id || !title || !status || !priority) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    const newTask = { id, title, status: status.toLowerCase(), priority };
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((task) => {
        taskList.push(task);
        renderTasks();
        alert("Công việc mới đã được thêm!");
      })
      .catch((error) => console.error(error));
  }
}

function deleteTask(id) {
  if (confirm("Bạn có chắc muốn xóa công việc này không?")) {
    fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Xóa công việc thất bại!");
        return res.json();
      })
      .then(() => {
        taskList = taskList.filter((task) => task.id !== id);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function editTask(id) {
  let task = taskList.find((t) => t.id == id);
  let newTitle = prompt("Nhập tiêu đề mới:", task.title);
  let newStatus = prompt(
    "Nhập trạng thái mới (todo, doing, done):",
    task.status
  );
  if (!["todo", "doing", "done"].includes(newStatus.toLowerCase())) {
    alert(
      "Trạng thái không hợp lệ! Chỉ được nhập 'todo', 'doing' hoặc 'done'."
    );
    return;
  }
  let newPriority = parseInt(
    prompt("Nhập mức độ ưu tiên mới (1, 2, 3):", task.priority)
  );
  if (![1, 2, 3].includes(newPriority)) {
    alert("Mức độ ưu tiên không hợp lệ. nhập 1, 2 hoặc 3.");
    return;
  }
  if (newTitle === null || newStatus === null || newPriority === null) {
    return;
  }
  const updatedTask = {
    title: newTitle,
    status: newStatus.toLowerCase(),
    priority: newPriority,
  };
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  })
    .then((res) => res.json())
    .then((updatedData) => {
      taskList = taskList.map((t) => (t.id == id ? updatedData : t));
      alert("Công việc đã được cập nhật!");
      renderTasks();
    })
    .catch((error) => console.error(error));
}

function filterTasks() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const statusFilter = document.getElementById("statusFilter").value;
  const sortOrder = document.getElementById("prioritySort").value;
  let filteredTasks = taskList.filter((task) => {
    return (
      task.title.toLowerCase().includes(searchText) &&
      (statusFilter === "" || task.status === statusFilter)
    );
  });
  if (sortOrder) {
    filteredTasks.sort((a, b) =>
      sortOrder === "asc" ? a.priority - b.priority : b.priority - a.priority
    );
  }
  renderTasks(filteredTasks);
}

function renderTasks(list = taskList) {
  tasks.innerHTML = list.length
    ? list
        .map(
          (task) => `
          <tr>
              <td>${task.id}</td>
              <td>${task.title}</td>
              <td>${task.status}</td>
              <td>${task.priority}</td>
              <td>
                  <button class="btn btn-success" onclick="editTask(${task.id})">Sửa</button>
                  <button class="btn btn-danger" onclick="deleteTask(${task.id})">Xóa</button>
              </td>
          </tr>
      `
        )
        .join("")
    : "<tr><td colspan='5' class='text-center'>No tasks</td></tr>";
}
