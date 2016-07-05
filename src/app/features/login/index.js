import './login.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import FooterController from '../../../components/footer/footer.controller';
import LoginController from './login.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';
import restful from '../../services/restful.service';

export default angular.module('app.login', [uirouter, acl, restful])
  .config(routing)
  .controller('LoginController', LoginController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
