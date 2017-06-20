var express = require("express");
var bodyParser = require("body-parser");
var application = express();

application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended: true}));

var routes = require("./routes/routes.js")(application);

var server = application.listen(process.env.PORT || 5000, function (){
	console.log("listening to port % ...", server.address().port);
});