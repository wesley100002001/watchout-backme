import './coupon.less';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';

import routing from './coupon.routes';
import FooterController from '../../../components/footer/footer.controller';
import CouponController from './coupon.controller';
import NavbarController from '../../../components/navbar/navbar.controller';
import acl from '../../services/acl.service';

export default angular.module('app.coupon', [acl, uibootstrap, uirouter])
  .config(routing)
  .controller('CouponController', CouponController)
  .controller('NavbarController', NavbarController)
  .controller('FooterController', FooterController)
  .name;
