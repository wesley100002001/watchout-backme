routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('activity', {
      url: '/activity',
      template: require('./activity.html'),
      controller: 'ActController',
      controllerAs: 'Act'
    });
}
