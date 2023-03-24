const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (todoInput.value.trim() === '') return;
    const todo = createTodoElement(todoInput.value.trim());
    todoList.appendChild(todo);
    todoInput.value = '';
});

todoList.addEventListener('click', (event) => {
    if (!event.target.matches('button')) return;
    const todo = event.target.closest('li');
    todo.parentNode.removeChild(todo);
});

function createTodoElement(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    li.appendChild(button);
    return li;
}
