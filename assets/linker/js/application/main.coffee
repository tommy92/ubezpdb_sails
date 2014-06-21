angular.module('UbezpDB', ['ui.router'])

angular.module('UbezpDB').run ($rootScope, $state) ->
  $rootScope.$state = $state

