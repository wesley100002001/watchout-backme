import './advertisements.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './advertisements.routes';
import AdsController from './advertisements.controller';
import FooterController from '../../../components/footer/footer.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.advertisements', [uirouter])
  .config(routing)
  .controller('AdsController', AdsController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
