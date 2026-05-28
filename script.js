document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  const createItem = (text) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.onclick = () => {
      li.classList.toggle('completed');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.onclick = () => {
      list.removeChild(li);
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    return li;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      list.appendChild(createItem(input.value.trim()));
      input.value = '';
    }
  });
});