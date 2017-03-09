const mongoose = require('mongoose');
// Create Schema class
const Schema = mongoose.Schema;

//create schema 
var ToDoSchema = Schema({
    todoText: {type: String, 
    		   required: true},
    completeBy: {type: Date,
    			required: true},
    completed: {type: Boolean, default: 0}
});

// Create the model
const ToDo = mongoose.model("ToDo", ToDoSchema);

//export the model
module.exports = ToDo;