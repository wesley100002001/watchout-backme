import './orderimport.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './orderimport.routes';
import FooterController from '../../../components/footer/footer.controller';
import OrderImportController from './orderimport.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';

export default angular.module('app.orderimport', [acl, uibootstrap, uirouter])
  .config(routing)
  .controller('OrderImportController', OrderImportController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;