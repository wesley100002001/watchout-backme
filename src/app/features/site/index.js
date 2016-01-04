import './site.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './site.routes';
import SiteController from './site.controller';

export default angular.module('app.site', [uirouter])
  .config(routing)
  .controller('SiteController', SiteController)
  .name;
