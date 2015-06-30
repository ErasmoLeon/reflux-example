var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('body-parser');
var app = express();

require('babel/register')({extensions: ['.jsx']});

// Use `.hbs` for extensions and find partials in `views/partials`.
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');*/

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routers
var routes = require('./app/routes.jsx');
var React = require('react');
var Router = require('react-router');

app.use(function (req, res, next) {
  var router = Router.create({location: req.url, routes: routes})
  router.run(function (Handler, state) {
    var body = React.renderToString(React.createElement(Handler));
    console.log(body);
    return res.render('main', {body: body});
  })
});

module.exports = app;


