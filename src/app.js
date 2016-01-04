import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './app/features/home';
import login from './app/features/login';
import site from './app/features/site';

angular.module('app', [uirouter, home, login, site])
  .config(routing);
