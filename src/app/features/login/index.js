import './login.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';
import randomNames from '../../services/randomNames.service';

export default angular.module('app.login', [uirouter, randomNames])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;
