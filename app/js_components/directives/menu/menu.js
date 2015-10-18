var app = angular.module( 'menu', [] );

app.directive( 'menu', function() {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js_components/directives/menu/menu.html',
    link: function( scope, iElement, iAttrs ) {

    }
  }

} );
