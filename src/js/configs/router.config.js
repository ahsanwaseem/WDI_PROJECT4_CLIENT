angular
.module('filmApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  // .state('homepage', {
  //   url: '/',
  //   templateUrl: '/js/views/homepage.html'
  // })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controllguler: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('filmsIndex', {
    url: '/films',
    templateUrl: '/js/views/films/index.html',
    controller: 'FilmsIndexCtrl',
    controllerAs: 'vm'
  })
  .state('filmsNew', {
    url: '/films/new',
    templateUrl: '/js/views/films/new.html',
    controller: 'FilmsNewCtrl',
    controllerAs: 'vm'
  })
  .state('filmsShow', {
    url: '/films/:id',
    templateUrl: '/js/views/films/show.html',
    controller: 'FilmsShowCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
