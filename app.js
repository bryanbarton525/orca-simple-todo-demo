document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-todo');
  const list = document.getElementById('todo-list');

  const addTodo = (text) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const toggle = document.createElement('button');
    toggle.textContent = '✓';
    toggle.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
    const del = document.createElement('button');
    del.textContent = '✕';
    del.addEventListener('click', () => {
      list.removeChild(li);
    });
    li.appendChild(span);
    li.appendChild(toggle);
    li.appendChild(del);
    list.appendChild(li);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      addTodo(text);
      input.value = '';
    }
  });
});