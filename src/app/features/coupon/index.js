import './coupon.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './coupon.routes';
import FooterController from '../../../components/footer/footer.controller';
import CouponController from './coupon.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';

export default angular.module('app.coupon', [uirouter, acl])
  .config(routing)
  .controller('CouponController', CouponController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
