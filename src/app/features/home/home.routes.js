routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('home', {
      url: '/home/',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'home'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
