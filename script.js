const form = document.getElementById("form")
const input = document.getElementById("input")
const todoUl= document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem('todos'))


if(todos){
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    addTodo();
})

function addTodo(todo){

    let todoText = input.value // to get the user inpit in this 

    if(todo){
        todoText = todo.text; 
    }

    if(todoText){
        const todoE1 = document.createElement("li")

        if(todo && todo.completed){
            todoE1.classList.add('completed')
        }

        todoE1.innerHTML = todoText

        //for left and right click event listener
        
        //left click
        
        todoE1.addEventListener('click', () => {
            todoE1.classList.toggle("completed") 
            // toggling with the completed class one time for completed again for not 
            updateLS()
        })

        //right click

        todoE1.addEventListener('contextmenu', (e) =>{
            e.preventDefault() //this prevent the default right click list.

            todoE1.remove(); //this will remove the todo after delete.


            updateLS()
        })


        todoUl.appendChild(todoE1);
        input.value = ' ';

        updateLS()
    }

    
}


function updateLS(){
    const todosE1= document.querySelectorAll("li")
// 
    const todos = []
    todosE1.forEach(todo =>{
        todos.push({
            text:todo.innerText,
            completed: todo.classList.contains('completed')
        })
    })
//storing in the local storages

    localStorage.setItem('todos', JSON.stringify(todos))
}