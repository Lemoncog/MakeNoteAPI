console.log('Starting...')
var express = require('express');
var app = express();
var router = express.Router();

//Set up routing
var notes = require('./routes/notes.js');
app.use('/notes', notes);

app.get('/', function(req, res, next) {
	res.json({ alive : "yup" });
});

var PORT = process.env.PORT || 8000;

var server = app.listen(PORT, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Started http://%s:%s', host, port);
})