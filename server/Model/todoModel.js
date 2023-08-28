const mongoose=require('mongoose');

//todoSchema
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

//model
const todo=mongoose.model('todo',todoSchema);

module.exports=todo;