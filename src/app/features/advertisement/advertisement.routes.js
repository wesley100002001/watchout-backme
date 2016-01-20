routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('advertisement', {
      url: '/advertisement/:adId',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./advertisement.html'),
          controller: 'AdController',
          controllerAs: 'ad'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
