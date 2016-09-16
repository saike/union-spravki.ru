'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = exports.routes = [{
  id: 'home',
  name: 'Главная',
  url: '/',
  template: 'routes/home'
}, {
  id: 'spravki',
  name: 'Справки',
  url: '/spravki',
  template: 'routes/spravki'
}, {
  id: 'knizhka',
  name: 'Медицинская книжка',
  url: '/knizhka',
  template: 'routes/knizhka'
}, {
  id: 'gai',
  name: 'Справка в ГАИ',
  url: '/gai',
  template: 'routes/gai'
}, {
  id: 'zakaz',
  name: 'Оставить заказ',
  url: '/zakaz',
  template: 'routes/zakaz'
}, {
  id: 'price',
  name: 'Стоимость услуг',
  url: '/price',
  template: 'routes/price'
}];

var router = _express2.default.Router();

_lodash2.default.each(routes, function (route) {

  router.get(route.url, function (req, res, next) {
    console.log('Route: ', route.id, route.url);
    res.locals.routes = routes;
    res.locals.route = route;
    console.log(res.locals);
    res.render(route.template, {});
  });
});

exports.default = router;