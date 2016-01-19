routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('attractions', {
      url: '/attractions',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./attractions.html'),
          controller: 'AttrsController',
          controllerAs: 'attrs'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
