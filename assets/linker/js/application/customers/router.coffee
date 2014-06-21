angular.module('UbezpDB').config ($urlRouterProvider, $stateProvider, $locationProvider) ->
  $locationProvider.html5Mode(true)

  $stateProvider.state 'customers',
    url: '/'
    controller: 'CustomersController'
    templateUrl: 'partials/customers/index'
