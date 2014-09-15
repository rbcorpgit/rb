'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

     $stateProvider
      .state('main', {
        templateUrl: 'system/views/index.html'
      })
      .state('main.showcase',{
        url : '/',
        templateUrl  : 'showcase/views/index.html',
        controller : 'ShowcaseController'
      })
      .state('main.register',{
        url : '/cadastro',
        templateUrl  : 'users/views/register.html'
      });
  }
]).config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);
