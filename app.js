document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  let todos = loadTodos();

  function loadTodos() {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function renderTodos() {
    list.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos();
        renderTodos();
      });

      const span = document.createElement('span');
      span.textContent = todo.text;
      if (todo.completed) {
        span.style.textDecoration = 'line-through';
      }

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => {
        todos = todos.filter(t => t.id !== todo.id);
        saveTodos();
        renderTodos();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    todos.push(newTodo);
    input.value = '';
    saveTodos();
    renderTodos();
  });

  renderTodos();
});