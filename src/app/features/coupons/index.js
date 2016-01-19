import './coupons.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './coupons.routes';
import CouponsController from './coupons.controller';
import FooterController from '../../../components/footer/footer.controller';
import NavbarController from '../../../components/navbar/navbar.controller';

export default angular.module('app.coupons', [uirouter])
  .config(routing)
  .controller('CouponsController', CouponsController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
