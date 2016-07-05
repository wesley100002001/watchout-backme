routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('password', {
      url: '/password/',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./password.html'),
          controller: 'PwdController',
          controllerAs: 'pwd'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
