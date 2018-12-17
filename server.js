let express = require('express');
let app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/index.html', (req,res,next) => {
	console.log("request for index page");
	//res.redirect('public/index.html');
	res.sendFile('public/index.html',{root: __dirname });
});

app.post('/index.html', (req,res,next) => {
	console.log("request for address");
	console.log(req.body.location);

	let spawn = require("child_process").spawn; 
	var process = spawn('python',["./geo-json.py", req.body.location] ); 

	process.stdout.on('data', function(data) {
		console.log(data.toString());
		res.setHeader('content-type', 'application/json');
		console.log(req.body);
		res.send(data.toString());
	});
	
});


function entry() {
	console.log('Listening on port number 8000');
}

app.listen(8000, entry);
