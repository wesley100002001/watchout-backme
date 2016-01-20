import './attraction.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './attraction.routes';
import FooterController from '../../../components/footer/footer.controller';
import AttrController from './attraction.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';

export default angular.module('app.attraction', [uirouter, acl])
  .config(routing)
  .controller('AttrController', AttrController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
