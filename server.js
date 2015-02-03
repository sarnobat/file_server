var express = require('express');
var sys = require('util')
var exec = require('child_process').exec;
var puts = sys.puts;

var app = express();

app.get('/files/tree', function(request, res) {

	console.log("begin");
	var location = request.query.locations;//"/media/sarnobat/e/Sridhar/Photos/camera phone photos/iPhone/";
	console.log("Locations: specified by client: " + location);
	{
		var command = "tree -J '" + location + "'";
		console.log("Command executed:\n\t" + command);
		exec(command, function (error, stdout, stderr) { 
			if (error != null) {
				puts("ERROR:" + stderr);
			}
			var lines = stdout;//stdout.split( "\n" );
			puts(lines);
			puts(lines.length);
			var json = {};
			json[location] = JSON.parse(lines) ;
			console.log(json);

    		        res.header("Access-Control-Allow-Origin", "*");
			res.send(json);
		});
	}
});


app.listen(4453);
console.log('Listening.');
