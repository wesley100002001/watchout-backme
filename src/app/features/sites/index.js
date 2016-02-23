import './sites.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import restful from '../../services/restful.service';
import routing from './sites.routes';
import FooterController from '../../../components/footer/footer.controller';
import SitesController from './sites.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.sites', [restful, uirouter])
  .config(routing)
  .controller('SitesController', SitesController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
