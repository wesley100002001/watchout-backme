import './attractions.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './attractions.routes';
import AttrsController from './attractions.controller';
import FooterController from '../../../components/footer/footer.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.attractions', [uirouter])
  .config(routing)
  .controller('AttrsController', AttrsController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
