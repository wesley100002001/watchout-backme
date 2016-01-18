routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('activities', {
      url: '/activities',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./activities.html'),
          controller: 'ActsController',
          controllerAs: 'acts'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
