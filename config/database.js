const mongoose = require('mongoose');
const db = mongoose.connection;
//connect to mongo database
mongoose.connect('mongodb://localhost/todo');


// Require bluebird as promise because mongoose promises are deprecated

var Promise = require('bluebird');
mongoose.Promise = Promise;

// Show any mongoose errors
db.on('error', console.log.bind(console, 'connection error'));
// Once logged in to the mongo DB through mongoose log a success message
db.once('open', function(){
    console.log('database connected');
});

// Export the database
module.exports = db;