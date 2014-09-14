'use strict';

angular.module('mean.showcase').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('showcase example page', {
      url: '/showcase/example',
      templateUrl: 'showcase/views/index.html'
    });
  }
]);
