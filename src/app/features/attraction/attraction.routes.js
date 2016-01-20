routes.$inject = ['$stateProvider'];

export default function routes ($stateProvider) {
  $stateProvider.state('attraction', {
      url: '/attraction/:attrId',
      views: {
        navbar: {
          template: require('../../../components/navbar/navbar.html'),
          controller: 'NavbarController',
          controllerAs: 'navbar'
        },
        content: {
          template: require('./attraction.html'),
          controller: 'AttrController',
          controllerAs: 'attr'
        },
        footer: {
          template: require('../../../components/footer/footer.html'),
          controller: 'FooterController',
          controllerAs: 'footer'
        }
      }
    });
}
