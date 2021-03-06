var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var passportLocal = require('passport-local');
var fs = require('fs');
var util = require('util');

var api = require('./routes/api');
var views = require('./routes/views');
//var authenticate = require('./routes/authenticate');

var app = express();

// view engine setup
app.set("view options", {layout: false});
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(session({
  secret: 'super duper secret',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize())
app.use(passport.session());

app.use('/api', api);
app.use('/', views);
//app.use('/auth', authenticate);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//app.set('view engine', 'html');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //console.log(res);

  // var err = new Error('Not Found');
  // err.status = 404;
   next(res.message);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    //console.log(err.message);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  //console.log(err.message);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

module.exports = app;
