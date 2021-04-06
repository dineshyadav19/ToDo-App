//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)


//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //create a div with class of todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create a li
    const newLi = document.createElement('li');
    newLi.innerText = todoInput.value;
    newLi.classList.add('todo-item');
    todoDiv.appendChild(newLi);
    //create a delete button and a checked button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>'
    checkedButton.classList.add('checked-btn')
    todoDiv.appendChild(checkedButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton);
    //Append to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

//Delete
function deleteCheck(e) {
    const item = e.target;

    //Delete todo
    if(item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    //check mark
    if(item.classList[0] === "checked-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}




