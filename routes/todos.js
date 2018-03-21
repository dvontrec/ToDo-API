//requires express
var express = require("express");
//allows this file to use express.router class
var router = express.router();

//***************************************
//			ROUTE SETUP
//***************************************

//
router.get("/", function(req, res)
{
	res.send("hello from todo");
});

module.exports = router;