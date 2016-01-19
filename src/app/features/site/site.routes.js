routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('site', {
      url: '/site/:siteId',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./site.html'),
          controller: 'SiteController',
          controllerAs: 'site'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
