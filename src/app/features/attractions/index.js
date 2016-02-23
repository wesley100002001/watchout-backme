import './attractions.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import restful from '../../services/restful.service';
import routing from './attractions.routes';
import AttrsController from './attractions.controller';
import FooterController from '../../../components/footer/footer.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.attractions', [restful, uirouter])
  .config(routing)
  .controller('AttrsController', AttrsController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
