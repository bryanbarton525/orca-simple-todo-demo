document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-todo');
  const list = document.getElementById('todo-list');

  const renderTodo = (text, completed = false) => {
    const li = document.createElement('li');
    li.className = completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = text;
    span.tabIndex = 0;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const del = document.createElement('button');
    del.textContent = '✕';
    del.className = 'delete';
    del.setAttribute('aria-label', 'Delete todo');
    del.addEventListener('click', () => {
      list.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    renderTodo(text);
    input.value = '';
    input.focus();
  });
});
