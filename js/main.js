var addButton = document.getElementById('add')
var inputTask = document.getElementById('new-task')
var unfinishedTasks = document.getElementById('unfinished-tasks')
var finishedTasks = document.getElementById('finished-tasks')

function createNewElement(task) {
    var listItem = document.createElement('li');
    var checkbox = document.createElement('button');
    checkbox.className = "materian-icons checkbox";
    checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
    var label = document.createElement('label');
    label.innerText = task;

    var input = document.createElement('input');
    input.type = "text";
    
    var editButton = document.createElement('button');
    editButton.className = "materian-icons edit"
    editButton.innerHTML = '<i class="material-icons">edit</i>';

    var deleteButton = document.createElement('button');
    deleteButton.className = "materian-icons delete"
    deleteButton.innerHTML = '<i class="material-icons">delete</i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    return listItem;
}

function addTask() {
    if(inputTask.value) {
        var listItem = createNewElement(inputTask.value)
        unfinishedTasks.appendChild(listItem)
        bindTaskEvents(listItem, finishTask)
        inputTask.value = "";
    }
}

addButton.onclick = addTask;

function deleteTask() {
    var listItem = this.paerntNode;
    console.log(listItem)
}

function editTask() {
    console.log('2')
}

function finishTask() {
    console.log('3')
} 

function unfinishTask() {
    console.log('4')
}

function bindTaskEvents(listItem,checkboxEvent) {
    var checkbox = listItem.querySelector('button.checkbox');
    var editButton = listItem.querySelector('button.edit');
    var deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
} 
