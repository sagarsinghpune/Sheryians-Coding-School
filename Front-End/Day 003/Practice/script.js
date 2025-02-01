// Load todos from localStorage or create empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let placeholderText = 'Task to add...';
let progressValue = 0;
let placeholder = document.getElementById('placeholder');

// Keyboard shortcuts for adding tasks by pressing Enter
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && todoInput.value.trim()) {
        saveTodo();
        return;
    }
});

function saveTodo() {
    const newTodo = todos.push(todoInput.value);
    updateTodoList(newTodo);
}

function showProgress(percent) {
    document.querySelector('.progress-bar').style.display = 'flex';
    document.querySelector('.progress').style.width = `${percent}%`;
}

function hideProgress() {
    document.querySelector('.progress-bar').style.display = 'none';
}

// Load todos from localStorage
function loadTodos() {
    if (localStorage.getItem('todos')) {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add new task
function addTask(text) {
    if (!text.trim()) return;
    
    // Create new todo element
    const todo = document.createElement('li');
    todo.className = 'task-item';
    todo.innerHTML = `
        <input type="text" value="${text}" placeholder="Enter task details">
        <button class="delete-btn">×</button>
    `;
    
    // Add todo to container
    const container = document.querySelector('.container');
    container.appendChild(todo);
    
    saveTodo();
}

// Function to create edit task modal
function createEditTaskModal(todoId) {
    const parent = document.createElement('div');
    parent.className = 'modal';
    
    const inputGroup = document.createElement('input-group');
    inputGroup.innerHTML = `
        <input type="text" value="${todo.value}" placeholder="Edit task">
        <button class="btn" type="button">Cancel</button>
        <button class="btn" type="submit">Update</button>
    `;
    
    parent.appendChild(inputGroup);
    
    document.querySelector('.container').appendChild(parent);
}

// Function to delete task by clicking delete button
function deleteTaskByClick(todoId) {
    const todo = container.children[todoId];
    const newTodoList = [...todos].map(todoItem => 
        typeof todoItem !== 'undefined' ? todoItem : null
    );
    
    if (newTodoList.length < todos.length) {
        hideProgress();
        saveTodos();
    }
}

// Function to delete task via placeholder
function deleteTaskByPlaceholder() {
    const todoToFind = container.lastChild.querySelector('.task-item');
    const newTodoList = [...todos];
    
    if (todoToFind) {
        newTodoList.splice(todoToFind.indexOf(todoToFind), 1);
        hideProgress();
        saveTodos();
    }
}

// Function to edit task
function editTask() {
    const todoId = prompt("Enter todo ID to edit:");
    if (!todoId) return;
    
    createEditTaskModal(todoId);
}

// Delete a task via delete button in list
function deleteTaskByListClick(todoId) {
    hideProgress();
    saveTodos();
}

// Function to show stats cards
function updateStatsCards() {
    // Update todo count and progress
    todoCountStat.textContent = `Total: ${todos.length}`;
    progressCountStat.textContent = `Completed: ${Math.round(todos.length * (1 - progressValue / 100))}`;
}
