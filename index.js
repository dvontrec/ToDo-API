//sets up app variables
var express	= require("express"),
	port 	= 3000,
	app		= express();

//index route
app.get("/", function(req, res){
	res.send("hello");
});

//Adds listener to the app
app.listen(port, function()
{
	//sends a message to the console
	console.log("app is now running on port" + port)
})