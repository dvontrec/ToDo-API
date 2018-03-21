//sets up app variables
var express		= require("express"),
	port 		= process.env.PORT || 3000,
	mongoose 	= require("mongoose"),
	toDoRoutes 	= require("./routes/todos"),
	bodyParser 	= require("body-parser"),
	app			= express();


//tells application what packages to use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//use routes with specific path
app.use("/api/todos", toDoRoutes);

//Adds listener to the app
app.listen(port, function()
{
	//sends a message to the console
	console.log("app is now running on port" + port)
})