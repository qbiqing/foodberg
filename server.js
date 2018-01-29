var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var test = require('./routes/testApi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/test',test);

app.get('*', (req, res)	=> {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;

var port = 4200;
app.listen(port, function() {
	console.log("Hello world");
});