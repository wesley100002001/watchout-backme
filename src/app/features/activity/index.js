import './activity.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './activity.routes';
import ActController from './activity.controller';
import FooterController from '../../../components/footer/footer.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.activity', [uirouter])
  .config(routing)
  .controller('ActController', ActController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
