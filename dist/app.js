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

var _swig = require('swig');

var _swig2 = _interopRequireDefault(_swig);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

require('./tools/tools');

var _templates = require('./tools/templates');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import favicon from 'serve-favicon';
var app = (0, _express2.default)();

// view engine setup
app.engine('swig', _swig2.default.renderFile);
app.set('view engine', 'swig');
app.set('views', _path2.default.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, '..', 'public')));
app.use('/libs', _express2.default.static(_path2.default.join(__dirname, '..', 'node_modules')));

app.use(function (req, res, next) {
  _lodash2.default.merge(res.locals, _templates.GlobalTemplateContext.context);
  console.log(res.locals);
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