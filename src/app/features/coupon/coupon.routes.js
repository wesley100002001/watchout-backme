routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('coupon', {
      url: '/coupon/:couponId',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./coupon.html'),
          controller: 'CouponController',
          controllerAs: 'coupon'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
