routes.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routes($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
