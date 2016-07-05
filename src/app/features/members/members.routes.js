routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('members', {
      url: '/members/',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./members.html'),
          controller: 'MembersController',
          controllerAs: 'members'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
