routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('coupons', {
      url: '/coupons',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./coupons.html'),
          controller: 'CouponsController',
          controllerAs: 'coupons'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
