import express from 'express';
import _ from 'lodash';
import { GlobalTemplateContext } from '../core/templates';

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
  },
  {
    id: 'dostavka',
    name: 'Доставка',
    url: '/dostavka',
    template: 'routes/dostavka',
    type: 'special'
  },
  {
    id: 'contacts',
    name: 'Контакты',
    url: '/contacts',
    template: 'routes/contacts'
  },
  {
    id: '095',
    name: 'Форма 095/у (Студенческая справка)',
    url: '/095',
    template: 'routes/095'
  },
  {
    id: 'bolnichny',
    name: 'Больничный лист',
    url: '/bolnichny',
    template: 'routes/bolnichny'
  },
  {
    id: '086',
    name: 'Справка 086/у',
    url: '/086',
    template: 'routes/086'
  },
  {
    id: 'dispanser',
    name: 'Справки из диспансеров',
    url: '/dispanser',
    template: 'routes/dispanser'
  },
  {
    id: 'bassein',
    name: 'Справка в бассейн',
    url: '/bassein',
    template: 'routes/bassein'
  },
  {
    id: 'beremennost',
    name: 'Справка о беременности',
    url: '/beremennost',
    template: 'routes/beremennost'
  }
];

var router = express.Router();

_.each(routes, function (route) {

  router.get(route.url, function(req, res, next) {
    console.log('Route: ', route.id, route.url);
    GlobalTemplateContext.routes = routes;
    GlobalTemplateContext.route = route;
    _.merge(res.locals, GlobalTemplateContext);
    res.render(route.template, { });
  });

});

export default router;

