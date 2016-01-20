routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('activity', {
      url: '/activity/:actId',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./activity.html'),
          controller: 'ActController',
          controllerAs: 'act'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
