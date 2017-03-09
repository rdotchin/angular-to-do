const mongoose = require('mongoose');
const db = require('./../config/database.js'); //require the database from config/database.js
const ToDo = require('./models/todoModel.js'); //require the model


// Require bluebird as promise because mongoose promises are deprecated
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app){
    
    // FIND ALL TODOS
    app.get('/api/todos', function(req, res){
        ToDo.find({}, function(err, data){ 
            if (err) return handleError(err); 
            res.json(data);
        });
    });

    //UPDATE TODO
    app.put('/api/todo', function(req, res){
        //find todo by req.body._id and update completed boolean to list.html(true) completed.html(false)
        ToDo.findByIdAndUpdate(req.body._id, {completed: req.body.completed}, function(err, post){
            if(err) return next(err);
            res.send(200); //respond with a 200(ok) status code
        });
    });

    //CREATE TODOS (completed boolean is created as false by default in the model)
    app.post('/api/todo', function(req, res){
        // Create new ToDo 
        var newToDo = new ToDo({
            todoText: req.body.todoText, // Todo content
            completeBy: req.body.completeBy // Todo date
        });

        // Save new ToDo to object
        newToDo.save(function(err, newTodo){
            if (err) return handleError(err);
            res.send(200); //respond with a 200(ok) status code
        });

    });

};