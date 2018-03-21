//requires express
var express = require("express");
//allows this file to use express.router class
var router = express.Router();
//imports all models
var db = require("../models");
//import helper functions
var helpers = require("../helpers/todos");

//***************************************
//			ROUTE SETUP
//***************************************

//get and put route
router.route("/")
	.get(helpers.getTodos)
	.post(helpers.createTodo)

//update and delete routes
router.route("/:todoId")
	.put(helpers.updateTodo)
	.delete(helpers.deleteTodo)

module.exports = router;