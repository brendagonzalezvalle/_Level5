const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")



const toDos = [
    {
        name: "Wash Dishes",
        description: "I need to wash the dishes today!",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()

    },
    {
        name: "Mop",
        description: "Mop the floors during my lunch!",
        imageUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()

    },
    {
        name: "Feed my Dogs",
        description: "Fill up dog bowls for Bleu & Henny",
        imageUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()
    }
]
// Get All

todoRouter.get("/", (req, res) => {
    res.send(toDos)
})

// Get one 

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const findTodoId = toDos.find(toDo => toDo._id === todoId)
    res.send(findTodoId)
})



// Delete One

todoRouter.delete("/:todoId", (req, res)=> {
    const todoId = req.params.todoId
    const findTodoIndex = toDos.findIndex(todo => todo._id === todoId)
    toDos.splice(findTodoIndex, 1)
    res.send("You have deleted the todo!")
})

// Update Todo Put request

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const findTodoIndex = toDos.findIndex(todo => todo._id === todoId)
    const updateTodo = Object.assign(toDos[findTodoIndex], req.body) //object assign is updating the objects with the updated information that user is updating
    res.send(updateTodo)

})

// Post new todo

todoRouter.post("/", (req, res) => {
    const newTodo = req.body // what user provides to have added
    newTodo._id = uuidv4() //generates a new uuid
    toDos.push(newTodo) // using push to add new todo to array
    res.send(`Succesfully added ${newTodo.name} to the database!`)
    
})

// Create endpoints that:

// - allows new todo items to be posted to the array,
//     - When posting a new todo, you must generate a unique id for that todo (consider using the `uuid` npm package), x
// - returns the entire list of todos, Get All X
// - allows the user to update a todo by its `_id`,
// - allows the user to delete a todo by its `_id`, X
// - allows the user retrieve a single todo by its `_id`. X


module.exports = todoRouter;