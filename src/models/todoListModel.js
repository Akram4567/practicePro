const mongoose = require('mongoose')

const todoListSchema = mongoose.Schema(
    {
        UserName:{type:String,},
        TodoSubject:{type:String},
        TodoDescription:{type:String},
        TodoStatus:{type:String, default:"New"},
    },
    {
        versionKey:false,
        timestamps:true
    }
)



const TodoList = mongoose.model('TodoLists', todoListSchema)

module.exports = TodoList