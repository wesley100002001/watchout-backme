import './activity.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './activity.routes';
import FooterController from '../../../components/footer/footer.controller';
import ActController from './activity.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';

export default angular.module('app.activity', [uirouter, acl])
  .config(routing)
  .controller('ActController', ActController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
