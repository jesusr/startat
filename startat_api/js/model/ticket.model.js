var restful = require('node-restful'),
    mongoose = restful.mongoose,
    express = require('express'),
    app = express();
    Ticket = app.ticket = restful.model('ticket', mongoose.Schema({
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
Ticket.register(app, '/ticket');
