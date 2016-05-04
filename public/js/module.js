'use strict';

var app = angular.module('flashcardApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('create', {
    url: '/create',
    templateUrl: 'html/create.html',
    controller: 'createCtrl'
  })
  // read (delete in button in list view)
  .state('list', {
    url: '/list',
    templateUrl: '/html/list.html',
    controller: 'listCtrl',
    resolve: {
      allCards:
      function(Cards) {
        return Cards.getAll();
      }
    }
  })
  // update
  .state('edit', {
    url: '/edit/:id',
    templateUrl: '/html/edit.html',
    controller: 'editCtrl',
    resolve: {
      id:
      function(Cards, $stateParams) {
        console.log('$stateParams in edit: ', $stateParams);
        return $stateParams.id;
      }
    }
  })
  .state('quiz', {
    url: '/quiz',
    templateUrl: 'html/quiz.html',
    controller: 'quizCtrl'
  })

  $urlRouterProvider.otherwise('/');
});
