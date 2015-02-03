var express = require('express');
var sys = require('util')
var exec = require('child_process').exec;
var puts = sys.puts;

var app = express();

app.get('/files/tree', function(request, res) {

	var location = request.query.locations;//"/media/sarnobat/e/Sridhar/Photos/camera phone photos/iPhone/";
	{
		exec("tree -J '" + location + "'", function (error, stdout, stderr) { 
			if (error != null) {
				puts("ERROR:" + stderr);
			}
			var lines = stdout.split( "\n" )
			puts(lines.length);
			var json = {};
			json[location] =lines ;

    		        res.header("Access-Control-Allow-Origin", "*");
			res.send(json);
		});
	}
});


app.listen(4453);
console.log('Listening.');
