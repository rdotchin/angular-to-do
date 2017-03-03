const mongoose = require('mongoose');
// Create Schema class
const Schema = mongoose.Schema;

//create schema for
var ToDoSchema = Schema({
    todo: String,
    completeBy: Date
});