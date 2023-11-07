import Todo from '../model/Todo.js';

// create a Todo 
export const addTodo = async (request, response) => {
    try{
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        response.status(200).json(newTodo);
        } catch(error){
            response.status(500).json(error.message);
        }
}

// get all Todos from MongoDB
export const getAllTodos = async (request, response) => {
    try {
        const allTodos = await Todo.find({}).sort({'createdAt': -1});
        response.status(200).json(allTodos);
    } catch(error) {
        response.status(500).json(error.message);
    }
}

// update a todo to done / undone using todoId obtained from MongoDB
export const toggleTodo = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);
        const todo = await Todo.findOneAndUpdate(
            { _id : request.params.id},
            { done : !todoRef.done}
        );
        await todo.save();
        response.status(200).json(todo);
    } catch(error) {
        response.status(500).json(error.message);
    }
}

// update a todo name using todoId obtained from MongoDB
export const updateTodo = async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id : request.params.id},
            { data : request.body.data}
        );
        const todo = await Todo.findById(request.params.id)
        response.status(200).json(todo);
    } catch(error) {
        response.status(500).json(error.message);
    }
}

// delete a todo using todoId obtained from MongoDB
export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id);
        response.status(200).json(todo);
    } catch(error) {
        response.status(500).json(error.message);
    }
}