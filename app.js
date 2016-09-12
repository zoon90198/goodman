var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');
var userdata = require('./routes/userdata');
var nearby = require('./routes/nearby');
var classify = require('./routes/classify');
var thankyou = require('./routes/thankyou');
var chancefate = require('./routes/chancefate');
var accepthelp = require('./routes/accepthelp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret:'zoon', saveUninitialized:false, resave:false}));


app.use('/', routes);
app.use('/users', users);
app.use('/register', register);
app.use('/userdata', userdata);
app.use('/nearby', nearby);
app.use('/classify', classify);
app.use('/thankyou', thankyou);
app.use('/chancefate', chancefate);
app.use('/accepthelp', accepthelp);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
