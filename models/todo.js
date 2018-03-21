//require mongoose
var mongoose = require("mongoose");

//create todo object schema
var todoSchema = new mongoose.Schema({
	//components set as objects to add properties to them by mongoose.
	name: {
		type:String,
		required: "Name cannot be blank"
	},
	Completed: {
		type: Boolean,
		default: false
	},
	Created_date: {
		type: Date,
		default: Date.now
	}
});

//compiles the schema into a model
var Todo = mongoose.model("Todo", todoSchema);

//exports the model so it can be accessesed outside of this file.
module.exports = Todo;