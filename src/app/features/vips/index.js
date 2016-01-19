import './vips.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './vips.routes';
import FooterController from '../../../components/footer/footer.controller';
import VipsController from './vips.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.vips', [uirouter])
  .config(routing)
  .controller('VipsController', VipsController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
