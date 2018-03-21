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
//allows app to use directories
app.use(express.static(__dirname + "/public")); //starts fro root directory
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res){
	res.sendFile("index.html");
});


//use routes with specific path
app.use("/api/todos", toDoRoutes);

//Adds listener to the app
app.listen(port, function()
{
	//sends a message to the console
	console.log("app is now running on port" + port)
})