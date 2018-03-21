//connect to mongoose
var mongoose = require("mongoose");
//allow debugging
mongoose.set("debug", true);
//Create/Connect to database
mongoose.connect("mongodb://localhost/todo-api");

//allows promise syntax to use in place of callback functions
mongoose.Promise = Promise;

//sends out the Todo model to any file accessing this index file
module.exports.Todo = require("./todo")