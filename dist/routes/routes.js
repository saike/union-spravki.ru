'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _templates = require('../core/templates');

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
}, {
  id: 'dostavka',
  name: 'Доставка',
  url: '/dostavka',
  template: 'routes/dostavka',
  type: 'special'
}, {
  id: 'contacts',
  name: 'Контакты',
  url: '/contacts',
  template: 'routes/contacts'
}, {
  id: '095',
  name: 'Форма 095/у (Студенческая справка)',
  url: '/095',
  template: 'routes/095'
}, {
  id: 'bolnichny',
  name: 'Больничный лист',
  url: '/bolnichny',
  template: 'routes/bolnichny'
}, {
  id: '086',
  name: 'Справка 086/у',
  url: '/086',
  template: 'routes/086'
}, {
  id: 'dispanser',
  name: 'Справки из диспансеров',
  url: '/dispanser',
  template: 'routes/dispanser'
}, {
  id: 'bassein',
  name: 'Справка в бассейн',
  url: '/bassein',
  template: 'routes/bassein'
}, {
  id: 'beremennost',
  name: 'Справка о беременности',
  url: '/beremennost',
  template: 'routes/beremennost'
}];

var router = _express2.default.Router();

_lodash2.default.each(routes, function (route) {

  router.get(route.url, function (req, res, next) {
    console.log('Route: ', route.id, route.url);
    _templates.GlobalTemplateContext.routes = routes;
    _templates.GlobalTemplateContext.route = route;
    _lodash2.default.merge(res.locals, _templates.GlobalTemplateContext);
    res.render(route.template, {});
  });
});

exports.default = router;