var express = 			require("express");
var _ = 				require("underscore");
var Promise =           require("bluebird");
var path =           	require("path");
var fs = 				require("fs");
var app = 				express();
var port = 				Number(process.env.PORT || 5000);

app.configure(function(){
	app.use(express.static(__dirname + "/public"));
});


app.get('/', function(req, res) {
	app.render(res, "public/src/index.html");
});

app.listen(port, function() {
	console.log("Listening on " + port);   
});

