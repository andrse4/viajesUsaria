angular.module('viajesUsaria', [
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'menu'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise('example');

  $stateProvider.
	state('example', {
		url: '/example',
		templateUrl: 'states/example/exampleView.html',
		controller: 'exampleController'
	}).
  state('dashboard', {
    url: '/dashboard',
    templateUrl: 'states/dashboard/dashboardView.html',
    controller: 'dashboardController'
  }).
  state('dashboard.home', {
    url: '/home',
    templateUrl: 'states/home/homeView.html',
    controller: 'homeController'
  });

} ] );
