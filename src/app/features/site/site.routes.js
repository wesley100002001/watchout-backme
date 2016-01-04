routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('site', {
      url: '/site',
      template: require('./site.html'),
      controller: 'SiteController',
      controllerAs: 'Site'
    });
}
