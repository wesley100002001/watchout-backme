import './advertisement.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './advertisement.routes';
import FooterController from '../../../components/footer/footer.controller';
import AdController from './advertisement.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';

export default angular.module('app.advertisement', [uirouter, acl])
  .config(routing)
  .controller('AdController', AdController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
