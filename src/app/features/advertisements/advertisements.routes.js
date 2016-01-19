routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('advertisements', {
      url: '/advertisements',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./advertisements.html'),
          controller: 'AdsController',
          controllerAs: 'ads'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
