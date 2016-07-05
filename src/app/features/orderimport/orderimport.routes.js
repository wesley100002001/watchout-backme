routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('orderimport', {
      url: '/orderimport/',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./orderimport.html'),
          controller: 'OrderImportController',
          controllerAs: 'orderimport'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
