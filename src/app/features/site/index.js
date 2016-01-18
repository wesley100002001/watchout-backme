import './site.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './site.routes';
import FooterController from '../../../components/footer/footer.controller';
import SiteController from './site.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.site', [uirouter])
  .config(routing)
  .controller('SiteController', SiteController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
