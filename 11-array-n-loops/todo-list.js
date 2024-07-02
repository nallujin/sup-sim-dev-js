const todoList = [];
///////////////////////////////////////////////////////////////////////////////
const btn1 = document.querySelector("#add1");
btn1.addEventListener("click", addTodo);


function addTodo() {
    const inputElement = document.querySelector("#list1");
    todoList.push(inputElement.value);
    inputElement.value = "";
    console.log(todoList);
    renderTodoList()
}

function renderTodoList() {
    const divTodo = document.querySelector("#todo-1");
    divTodo.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const pTag = document.createElement("p");
        pTag.textContent = todoList[i];
        divTodo.appendChild(pTag);
    }
}

///////////////////////////////////////////////////////////////////////////
