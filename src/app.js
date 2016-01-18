import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import routing from './app.config';
import login from './app/features/login';
import sites from './app/features/sites';
import activities from './app/features/activities'
import attractions from './app/features/attractions';

angular.module('app', [uirouter, ngCookies, login, sites, activities, attractions])
  .config(routing);
