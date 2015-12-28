import './login.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';
import randomNames from '../../services/randomNames.service';
import greeting from '../../directives/greeting.directive';

export default angular.module('app.login', [uirouter, randomNames, greeting])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;
