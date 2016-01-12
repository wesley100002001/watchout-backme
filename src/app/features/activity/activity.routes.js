routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('activity', {
      url: '/activity',
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
        }
      }
    });
}
