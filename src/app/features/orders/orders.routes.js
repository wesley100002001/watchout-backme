routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('orders', {
      url: '/orders/',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./orders.html'),
          controller: 'OrdersController',
          controllerAs: 'orders'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
