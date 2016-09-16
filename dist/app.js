'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _twig = require('twig');

var _twig2 = _interopRequireDefault(_twig);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

require('./tools/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// view engine setup

// import favicon from 'serve-favicon';
app.engine('twig', _twig2.default.renderFile);
app.set('view engine', 'twig');

// This section is optional and used to configure twig.
app.set("twig options", {
  strict_variables: false
});

app.set('views', _path2.default.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'public')));
app.use('/libs', _express2.default.static(_path2.default.join(__dirname, '..', 'node_modules')));

const config = JSON.parse(_fs2.default.readFileSync(_path2.default.join(__dirname, '..', 'config', 'config.json'), 'utf8'));

app.use((req, res, next) => {
  res.locals.CONFIG = config;
  next();
});

app.use('/', _routes2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
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
  res.render('error', {
    message: err.message,
    error: {}
  });
});

exports.default = app;