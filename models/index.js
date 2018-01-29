var mongoose = require('mongoose');
mongoose.set('debug',true);  //DEBUGGER TO KNOW EACH POINT OF INSERTION/DELETION /UPDATE TO DB;
mongoose.connect('mongodb://localhost/todo-api'); 
//where todo-api is name of our db which is created as soon as we run the server

mongoose.Promise = Promise;
//USE PROMISE INSTEAD OF USING SOME EXTERNAL PROMISE LIBRARY foreg(.then and .catch)

module.exports.Todo = require("./todo");