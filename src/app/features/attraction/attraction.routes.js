routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('attraction', {
      url: '/attraction',
      template: require('./attraction.html'),
      controller: 'AttrController',
      controllerAs: 'Attr'
    });
}
