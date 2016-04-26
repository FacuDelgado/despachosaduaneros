'use strict';
var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');
var homeController = require('./controllers/home');


var app = express();
var port = process.env.PORT || 8080;

app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use('/', homeController);

app.use('/public', express.static(__dirname + '/public'));

http.createServer(app).listen(port, function onListening() {
    
    console.log('Server listening on port ' + port);
});
