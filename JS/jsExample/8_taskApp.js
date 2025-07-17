  let currentEditTask = null;

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        if (currentEditTask) {
            currentEditTask.querySelector('span').textContent = taskText;
            currentEditTask = null;
            document.getElementById('addButton').textContent = 'Add Task';
        } else {
            createTaskElement(taskText);
        }

        taskInput.value = '';
    }

    function createTaskElement(taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'task-item');

        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('task-buttons');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Mark as Completed';
        completeBtn.classList.add('btn', 'btn-success');
        completeBtn.setAttribute('onclick', 'markDone(event)');
        buttonContainer.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('btn', 'btn-warning');
        editBtn.setAttribute('onclick', 'editTask(event)');
        buttonContainer.appendChild(editBtn);

        li.appendChild(buttonContainer);
        taskList.appendChild(li);
    }

    function editTask(event) {
        const li = event.target.closest('li');
        const span = li.querySelector('span');
        const taskInput = document.getElementById('taskInput');
        taskInput.value = span.textContent;

        currentEditTask = li;
        document.getElementById('addButton').textContent = 'Update';
    }

    function markDone(event) {
        const li = event.target.closest('li');
        const taskInput = document.getElementById('taskInput');
        const doneList = document.getElementById('doneList');

        const buttonContainer = li.querySelector('.task-buttons');
        buttonContainer.innerHTML = '';

        const undoBtn = document.createElement('button');
        undoBtn.textContent = 'Undo';
        undoBtn.classList.add('btn', 'btn-secondary');
        undoBtn.setAttribute('onclick', 'undoComplete(event)');
        buttonContainer.appendChild(undoBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.setAttribute('onclick', 'removeTask(event)');
        buttonContainer.appendChild(deleteBtn);

        doneList.appendChild(li);
        taskInput.value = '';
        document.getElementById('addButton').textContent = 'Add Task';
        currentEditTask = null;
    }

    function undoComplete(event) {
        const li = event.target.closest('li');
        const taskList = document.getElementById('taskList');

        const buttonContainer = li.querySelector('.task-buttons');
        buttonContainer.innerHTML = '';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Mark as Completed';
        completeBtn.classList.add('btn', 'btn-success');
        completeBtn.setAttribute('onclick', 'markDone(event)');
        buttonContainer.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('btn', 'btn-warning');
        editBtn.setAttribute('onclick', 'editTask(event)');
        buttonContainer.appendChild(editBtn);

        taskList.appendChild(li);
    }

    function removeTask(event) {
        const li = event.target.closest('li');
        const taskInput = document.getElementById('taskInput');
        li.parentElement.removeChild(li);
        taskInput.value = '';
        document.getElementById('addButton').textContent = 'Add Task';
        currentEditTask = null;
    }