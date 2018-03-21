//sets up app variables
var express		= require("express"),
	port 		= process.env.PORT || 3000,
	mongoose 	= require("mongoose");
	app			= express();

//index route
app.get("/", function(req, res){
	res.json({
		name:"test",
		title:"case"
	});
});

//Adds listener to the app
app.listen(port, function()
{
	//sends a message to the console
	console.log("app is now running on port" + port)
})