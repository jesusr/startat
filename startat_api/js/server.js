// Init & Dependencies
var express = require('express'),
  restful   = require('node-restful'),
  mongoose  = restful.mongoose,
  methodOverride = require('method-override'),
  bodyParser= require('body-parser');

var app = module.exports = express();
app.use(bodyParser());
app.use(methodOverride());
// Database

mongoose.connect('mongodb://localhost:27017/startat');

// Model

var Ticket = app.ticket = restful.model('ticket', mongoose.Schema({
  title: String,
  user_create : String,
  user_updated : String,
  updateDateTime : Date,
  createDateTime : Date,
  endDateTime : Date,
  startDateTime : Date,
  percent : Number,
  timeDedicated : Number,
  priority : Number,
  category : String, 
  version : String, 
  subTickets : [String], 
  logs : [String]
})).methods(['get', 'post', 'put', 'delete']);
Ticket.register(app, '/api/v1/ticket');
//var Status = require('./models/status.model');

var port = process.env.PORT || 1111;

// Routes
// var api = require('./router/api.router');

// app.use('/', function(req,res,next){
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

// Launch

app.listen(port);
console.log('Listening at ' + port);