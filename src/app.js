import './style/reset.css';
import './style/style.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import activity from './app/features/activity';
import activities from './app/features/activities';
import advertisement from './app/features/advertisement';
import advertisements from './app/features/advertisements';
import attraction from './app/features/attraction';
import attractions from './app/features/attractions';
import coupon from './app/features/coupon';
import coupons from './app/features/coupons';
import home from './app/features/home';
import login from './app/features/login';
import members from './app/features/members';
import order from './app/features/order';
import orderexport from './app/features/orderexport';
import orderimport from './app/features/orderimport';
import orders from './app/features/orders';
import password from './app/features/password';
import routing from './app.config';
import site from './app/features/site';
import sites from './app/features/sites';
import vips from './app/features/vips';

angular.module('app', [uirouter, ngCookies, advertisement, advertisements,
      activity, activities, attraction, attractions, coupon, coupons, home,
      login, members, order, orderexport, orderimport, orders, password, site,
      sites, vips])
  .config(routing);
