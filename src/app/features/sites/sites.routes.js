routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('sites', {
      url: '/sites',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./sites.html'),
          controller: 'SitesController',
          controllerAs: 'sites'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
