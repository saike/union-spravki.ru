'use strict';

var _routes = require('../routes/routes');

var _templates = require('../core/templates');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nav_routes = ['home', 'spravki', 'knizhka', 'gai', 'zakaz', 'price', 'dostavka', 'contacts'];

const nav_left = ['knizhka', 'gai', '095', 'bolnichny', 'dispanser', 'bassein', '086', 'beremennost'];

_templates.GlobalTemplateContext.navigation = nav_routes.map(route_id => {

  return _routes.routes.filter(route => {
    return route.id === route_id;
  })[0];
});

_templates.GlobalTemplateContext.navigation_left = nav_left.map(route_id => {

  return _routes.routes.filter(route => {
    return route.id === route_id;
  })[0];
});