import './activity.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './activity.routes';
import ActController from './activity.controller';

export default angular.module('app.activity', [uirouter])
  .config(routing)
  .controller('ActController', ActController)
  .name;
