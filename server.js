var express = require('express');
var sys = require('util')
var exec = require('child_process').exec;
var puts = sys.puts;

var app = express();

app.get('/dups/all', function(req, res) {
	
	/*var location = "/media/sarnobat/e/Sridhar/Photos/camera phone photos/iPhone/";
	var type = "dups_excess_only.txt";
	{
		exec("cat '"+location+"/"+type+"'", function (error, stdout, stderr) { 
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
	}*/
	res.header("Access-Control-Allow-Origin", "*");
	res.send({ parameter_you_sent : req.query.locations});
});


app.listen(4453);
console.log('Listening on port http://netgear.rohidekar.com:4453/dups/all');
