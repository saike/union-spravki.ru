import { routes } from '../routes/routes';
import { GlobalTemplateContext } from '../core/templates';
import _ from 'lodash';

const nav_routes = [ 'home', 'spravki', 'knizhka', 'gai', 'zakaz', 'price', 'dostavka', 'contacts' ];

const nav_left = [ 'knizhka', 'gai', '095', 'bolnichny', 'dispanser', 'bassein', '086', 'beremennost' ];

GlobalTemplateContext.navigation = nav_routes.map((route_id) => {

  return routes.filter((route) => {
    return route.id === route_id;
  })[0];

});

GlobalTemplateContext.navigation_left = nav_left.map((route_id) => {

  return routes.filter((route) => {
    return route.id === route_id;
  })[0];

});

