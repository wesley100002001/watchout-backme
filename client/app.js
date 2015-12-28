import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './app/features/home';
import login from './app/features/login';

angular.module('app', [uirouter, home, login])
  .config(routing);
