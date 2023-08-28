const express=require('express');
const todo = require('../Model/todoModel');
const { createTodo, allTodo, deleteToto, updateTodo } = require('../Controller/todoController/todoController');

const todoRoutes=express.Router();

todoRoutes.get('/',(req,res)=>{
    res.send('Home Page');
})

//create todo list
todoRoutes.post('/create',createTodo)

//fetch all todo list
todoRoutes.get('/all',allTodo)

//delete todo list
todoRoutes.delete('/delete/:id',deleteToto);

//updatr todo list
todoRoutes.patch('/update/:id',updateTodo);


module.exports=todoRoutes;