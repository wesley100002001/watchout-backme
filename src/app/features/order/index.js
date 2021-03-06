import './order.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './order.routes';
import FooterController from '../../../components/footer/footer.controller';
import OrderController from './order.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';
import restful from '../../services/restful.service';

export default angular.module('app.order', [acl, uibootstrap, uirouter, restful])
  .config(routing)
  .controller('OrderController', OrderController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
