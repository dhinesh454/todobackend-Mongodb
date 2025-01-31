const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Todos = mongoose.model('todos',todoSchema)

module.exports=Todos;