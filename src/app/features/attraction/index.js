import './attraction.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './attraction.routes';
import AttrController from './attraction.controller';

export default angular.module('app.attraction', [uirouter])
  .config(routing)
  .controller('AttrController', AttrController)
  .name;
