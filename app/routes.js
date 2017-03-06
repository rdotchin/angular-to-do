const mongoose = require('mongoose');
const db = require('./../config/database.js'); //require the database from config/database.js
const ToDo = require('./models/todoModel.js'); //require the model


// Require bluebird as promise because mongoose promises are deprecated
var Promise = require('bluebird');
mongoose.Promise = Promise;

module.exports = function(app){
    
    // FIND ALL TODOS
    app.get('/api/todos', function(req, res){
        ToDo.find({}, function(err, data){ // Find all todos
            if (err) return handleError(err); 
            res.json(data);
        });
    });

    //UPDATE SAVED TODOS
    app.put('/api/todo', function(req, res){
        ToDo.findByIdAndUpdate(req.params.id, req.body, function(err, post){
            if(err) return next(err);
            res.json(post);
        });
    });

    //CREATE TODOS
    app.post('/api/todo', function(req, res){
        var newToDo = new ToDo({
            todoText: req.body.todoText, //content
            completeBy: req.body.completeBy //date
        });

        newToDo.save(function(err, newTodo){
            if (err) return handleError(err);
            res.send(200); //respond with a 200(ok) status code
        });

    });

};