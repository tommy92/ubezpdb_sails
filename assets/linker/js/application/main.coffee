angular.module('UbezpDB', ['ui.router', 'restangular'])

angular.module('UbezpDB').run ($rootScope, $state) ->
  $rootScope.$state = $state

