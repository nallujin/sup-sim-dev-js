const todoList = [
    {name: "make dinner", dueDate: "2022-12-22"},
    {name: "wash dishes", dueDate: "2022-12-22"}];
///////////////////////////////////////////////////////////////////////////////
const btn1 = document.querySelector("#add1");
btn1.addEventListener("click", addTodo);
renderTodoList();

function addTodo() {
    const inputElement = document.querySelector("#nameInput");
    const name = document.querySelector("#nameInput").value;

    const dateInputElement = document.querySelector("#dueDateInput");
    const dueDate = document.querySelector("#dueDateInput").value;

    todoList.push({name, dueDate});

    inputElement.value = "";
    dateInputElement.value = "";

    renderTodoList()
}

function renderTodoList() {
    const divTodo = document.querySelector("#todo-1");
    divTodo.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const taskName = document.createElement("div");
        const taskDue = document.createElement("div");

        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        taskName.textContent = name;
        taskDue.textContent = dueDate;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-todo-button")
        delBtn.addEventListener("click", () => {
            todoList.splice(i, 1);
            renderTodoList();
        });

        divTodo.appendChild(taskName);
        divTodo.appendChild(taskDue);
        divTodo.appendChild(delBtn);
    }
}

/////////////////// ////////////////////////////////////////////////////////