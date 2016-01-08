import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import routing from './app.config';
import login from './app/features/login';
import site from './app/features/site';
import attraction from './app/features/attraction';

angular.module('app', [uirouter, ngCookies, login, site, attraction])
  .config(routing);
