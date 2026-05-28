const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function renderTodo(item, index) {
  const li = document.createElement("li");
  li.textContent = item.text;
  if (item.completed) {
    li.style.textDecoration = "line-through";
  }

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = item.completed ? "Undo" : "Done";
  toggleBtn.addEventListener("click", () => {
    item.completed = !item.completed;
    renderTodos();
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    renderTodos();
  });

  li.appendChild(toggleBtn);
  li.appendChild(delBtn);
  return li;
}

let todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((item, idx) => {
    todoList.appendChild(renderTodo(item, idx));
  });
}

addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text !== "") {
    todos.push({ text, completed: false });
    todoInput.value = "";
    renderTodos();
  }
});