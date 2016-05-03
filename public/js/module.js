'use strict';

var app = angular.module('flashcardApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('create', {
    url: 'create',
    templateUrl: 'html/create.html',
    contorller: 'createCtrl'
  })
  // read (delete in button in list view)
  .state('list', {
    url: '/list',
    templateUrl: '/html/list.html',
    controller: 'listCtrl'
  })
  // update
  .state('edit', {
    url: '/edit/:id',
    templateUrl: '/html/edit.html',
    controller: 'editCtrl',
    resolve: {
      card:
      function(Cards, $stateParams) {
        //return a promise that will resolve to the card
        console.log('$stateParams in edit: ', $stateParams);
        return Cards.getById($stateParams.id);
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