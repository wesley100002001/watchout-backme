routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('order', {
      url: '/order/:orderId',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./order.html'),
          controller: 'OrderController',
          controllerAs: 'order'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
