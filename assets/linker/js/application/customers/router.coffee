angular.module('UbezpDB').config ($urlRouterProvider, $stateProvider) ->
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state 'customers',
      url: '/'
      controller: 'CustomersController'
      templateUrl: 'partials/customers/index'
      resolve:
        customers: (Restangular) ->
          Restangular.one('api').all('customers').getList()

    .state 'customer_edit',
      url: '/customers/:id/'
      controller: 'CustomerEditController'
      templateUrl: 'partials/customers/customer'
      resolve:
        customer: (Restangular, $stateParams) ->
          Restangular.one('api').one('customers', parseInt($stateParams.id)).get()
