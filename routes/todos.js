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
	//creates a new to do from the body
	db.Todo.create(req.body)
	//if sucessful
	.then(function(newToDo){
		//send the new to do back with the created status
		res.status(201).json(newToDo); //201 is the created status.
	})
	.catch(function(err){
		res.send(err);
	})
});

//Update route
router.put("/:todoId", function(req, res){
	//fimds one task by the Id and updates it
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:true}) //responds with updated todo
	//ifsuccessful
	.then(function(todo){
		res.json(todo);
	})
	//if fail
	.catch(function(err){
		res.send(err);
	})
})

//Delete route
router.delete("/:todoId", function(req, res){
		//finds by Id and deletes
		db.Todo.remove({_id: req.params.todoId})
		//if successful
		.then(function(){
			res.json({message: "to do deleted"});
		})
		//if fail
		.catch(function(err)
		{
			res.send(err);
		})
})

module.exports = router;