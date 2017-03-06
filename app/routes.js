const mongoose = require('mongoose');
const db = require('./../config/database.js'); //require the database from config/database.js
const ToDo = require('./models/todoModel.js'); //require the model


// Require bluebird as promise because mongoose promises are deprecated
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app){
    // FIND ALL TODOS
    app.get('/api/todo', function(req, res){
        ToDo.find({}, function(err, data){ // Find all todos
            if (err) return handleError(err); // If error
            res.send('index.html')
            /*res.json(data)*/ //return the data in JSON format
        });
    });

    //UPDATE SAVED TODOS
    app.put('/api/todo', function(req, res){

    });

    //CREATE TODOS
    app.post('/api/todo', function(req, res){
        var newToDo = new ToDo({
            todoText: req.body.todoText, //content
            completeBy: req.body.completeBy //date
        });

        newToDo.save(function(err){
            if (err) return handleError(err);
        });

    });

};