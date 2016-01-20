import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import activity from './app/features/activity';
import activities from './app/features/activities';
import advertisements from './app/features/advertisements';
import attraction from './app/features/attraction';
import attractions from './app/features/attractions';
import coupon from './app/features/coupon';
import coupons from './app/features/coupons';
import login from './app/features/login';
import routing from './app.config';
import site from './app/features/site';
import sites from './app/features/sites';
import vips from './app/features/vips';

angular.module('app', [uirouter, ngCookies, advertisements, activity,
      activities, attraction, attractions, coupon, coupons, login, site, sites,
      vips])
  .config(routing);
