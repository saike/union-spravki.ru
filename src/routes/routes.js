import express from 'express';
import _ from 'lodash';

export const routes = [
  {
    id: 'home',
    name: 'Главная',
    url: '/',
    template: 'routes/home'
  },
  {
    id: 'spravki',
    name: 'Справки',
    url: '/spravki',
    template: 'routes/spravki'
  },
  {
    id: 'knizhka',
    name: 'Медицинская книжка',
    url: '/knizhka',
    template: 'routes/knizhka'
  },
  {
    id: 'gai',
    name: 'Справка в ГАИ',
    url: '/gai',
    template: 'routes/gai'
  },
  {
    id: 'zakaz',
    name: 'Оставить заказ',
    url: '/zakaz',
    template: 'routes/zakaz'
  },
  {
    id: 'price',
    name: 'Стоимость услуг',
    url: '/price',
    template: 'routes/price'
  }
];

var router = express.Router();

_.each(routes, function (route) {

  router.get(route.url, function(req, res, next) {
    console.log('Route: ', route.id, route.url);
    res.locals.routes = routes;
    res.locals.route = route;
    console.log(res.locals);
    res.render(route.template, { });
  });

});

export default router;

