// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var bodyParser = require('body-parser');
var path = require('path')
var express = require('express');

// EXPRESS CONFIGURATION
var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
	res.send(index.html);
});

//Start server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

