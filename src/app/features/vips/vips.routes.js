routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('vips', {
      url: '/vips',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./vips.html'),
          controller: 'VipsController',
          controllerAs: 'vips'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
