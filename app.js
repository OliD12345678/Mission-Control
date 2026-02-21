app.js  // Tasks Board Functionality

const tasks = [];

// Function to add a task
function addTask(title, assignedTo) {
    const task = { title, assignedTo, status: 'To Do' };
    tasks.push(task);
    updateBoard();
}

// Function to move a task between columns
function moveTask(taskIndex, newStatus) {
    if (tasks[taskIndex]) {
        tasks[taskIndex].status = newStatus;
        updateBoard();
    }
}

// Function to update board display
function updateBoard() {
    const toDoColumn = document.getElementById('to-do');
    const inProgressColumn = document.getElementById('in-progress');
    const completedColumn = document.getElementById('completed');

    // Clear existing cards
    toDoColumn.innerHTML = '';
    inProgressColumn.innerHTML = '';
    completedColumn.innerHTML = '';

    // Populate columns with task cards
    tasks.forEach((task, index) => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        taskCard.innerHTML = `<strong>${task.title}</strong><br>Assigned to: ${task.assignedTo}<br>Status: ${task.status}`;
        taskCard.setAttribute('draggable', true);
        taskCard.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', index);
        });

        if (task.status === 'To Do') {
            toDoColumn.appendChild(taskCard);
        } else if (task.status === 'In Progress') {
            inProgressColumn.appendChild(taskCard);
        } else if (task.status === 'Completed') {
            completedColumn.appendChild(taskCard);
        }
    });
}

// Function to handle drop event
function dropTask(event, newStatus) {
    event.preventDefault();
    const taskIndex = event.dataTransfer.getData('text/plain');
    moveTask(taskIndex, newStatus);
}

// Event listeners for drop zones
document.getElementById('to-do').addEventListener('drop', (e) => dropTask(e, 'To Do'));
document.getElementById('in-progress').addEventListener('drop', (e) => dropTask(e, 'In Progress'));
document.getElementById('completed').addEventListener('drop', (e) => dropTask(e, 'Completed'));
document.getElementById('to-do').addEventListener('dragover', (e) => e.preventDefault());
document.getElementById('in-progress').addEventListener('dragover', (e) => e.preventDefault());
document.getElementById('completed').addEventListener('dragover', (e) => e.preventDefault());

// Example usage
addTask('Follow up with leads', 'User');
