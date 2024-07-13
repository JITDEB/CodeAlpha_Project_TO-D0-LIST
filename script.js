function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    // Create task item
    const taskItem = document.createElement('li');

    // Create task content container
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    // Create task text element
    const taskTextElement = document.createElement('p');
    taskTextElement.innerText = taskText;

    // Create date element
    const dateElement = document.createElement('span');
    const currentDateTime = new Date();
    const formattedDate = `${currentDateTime.getDate()}/${currentDateTime.getMonth() + 1}/${currentDateTime.getFullYear()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`;
    dateElement.innerText = formattedDate;
    dateElement.className = 'task-date';

    // Create buttons container
    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    // Create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => editTask(taskItem, taskTextElement);

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = () => completeTask(taskItem);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteTask(taskItem);

    // Append elements
    taskContent.appendChild(taskTextElement);
    taskContent.appendChild(dateElement);
    taskButtons.appendChild(editButton);
    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskButtons);
    taskList.appendChild(taskItem);

    // Clear input
    taskInput.value = '';
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function editTask(taskItem, taskTextElement) {
    const newText = prompt('Edit your task:', taskTextElement.innerText);
    if (newText) {
        taskTextElement.innerText = newText;
    }
}
