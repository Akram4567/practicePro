const TodoList = require('../models/todoListModel')

exports.createTodo = async (req, res) => {
    try{
        const reqBody = {
             UserName : req.headers.UserName,
             TodoSubject : req.body.TodoSubject,
             TodoDescription : req.body.TodoDescription
        }
        

        const newTodoList = await TodoList.create(reqBody)
        res.status(201).json({newTodoList})
    }catch(e) {
        console.log(e)
    }
}