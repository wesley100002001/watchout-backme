import './activities.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import restful from '../../services/restful.service';
import routing from './activities.routes';
import ActsController from './activities.controller';
import FooterController from '../../../components/footer/footer.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.activities', [restful, uirouter])
  .config(routing)
  .controller('ActsController', ActsController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
