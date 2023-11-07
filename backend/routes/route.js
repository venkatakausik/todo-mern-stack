import { addTodo, getAllTodos, toggleTodo, updateTodo, deleteTodo } from '../controller/todoController.js';

import express from 'express';
const route = express.Router();

// route to create a Todo
route.post('/tasks', addTodo);
// route to get all Todo
route.get('/tasks', getAllTodos);
// route to mark a Todo as done / undone
route.get('/tasks/:id', toggleTodo);
// route to update a Todo name
route.put('/tasks/:id', updateTodo);
// route to delete a Todo
route.delete('/tasks/:id', deleteTodo);
export default route;