const mongoose = require('mongoose');
// Create Schema class
const Schema = mongoose.Schema;

//create schema for
var ToDoSchema = Schema({
    todoText: String,
    completeBy: Date,
    completed: {type: Boolean, default: 0}
});

// Create the model
const ToDo = mongoose.model("ToDo", ToDoSchema);

//export the model
module.exports = ToDo;