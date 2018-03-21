//requires express
var express = require("express");
//allows this file to use express.router class
var router = express.Router();
//imports all models
var db = require("../models")

//***************************************
//			ROUTE SETUP
//***************************************

//Index to do route
router.get("/", function(req, res)
{
	//finds all todos in the database
	db.Todo.find()
	//if successful
	.then(function(todos){
		//sends todos as json
		res.json(todos)
	})
	//error handling
	.catch(function(err){
		res.send(err);
	})
});

//Create todo route
router.post("/", function(req, res){
	
});

module.exports = router;