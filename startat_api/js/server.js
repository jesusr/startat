// Init & Dependencies
var express = require('express'),
  restful   = require('node-restful'),
  mongoose  = restful.mongoose,
  app       = express(),
  bodyParser= require('body-parser');

// Database

mongoose.connect('mongodb://localhost:27017/startat');

// Model

var Ticket  = require('./model/ticket.model');
//var Status = require('./models/status.model');

var port = process.env.PORT || 1111;

// Routes
// var api = require('./router/api.router');

app.use('/', function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Launch

app.listen(port);
console.log('Listening at ' + port);