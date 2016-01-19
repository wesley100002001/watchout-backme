import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import activities from './app/features/activities'
import attractions from './app/features/attractions';
import coupons from './app/features/coupons';
import login from './app/features/login';
import routing from './app.config';
import site from './app/features/site';
import sites from './app/features/sites';

angular.module('app', [uirouter, ngCookies, coupons, login, site, sites,
    activities, attractions])
  .config(routing);
