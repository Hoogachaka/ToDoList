// const arrayOfTodos1 = [
//     {
//     "userId": 14,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// },
// {
//     "userId": 20,
//     "id": 2,
//     "title": "delectus aut autem",
//     "completed": false
// }]

// console.log(`"userID:" ${arrayOfTodos1[0].userId}`)

const fetchTodos = () => {
    fetch('https://reqres.in/api/users?page=2')
    .then( (res) => res.json())
    .then( (d) => populateTodos(d))
}

const logToDos = () => {
    console.log(arrayOfTodos1)
}

const populateTodos = (d) => {
    console.log(d.data[5].avatar)
    const todoList = document.getElementById('todo-list')

    for (let i = 0; i < d.data.length; i++) {
        const element = document.createElement('li')
        element.innerHTML = `<img src="${d.data[i].avatar}">`
        todoList.appendChild(element)
    }
}