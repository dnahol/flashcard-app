'use strict';

var app = angular.module('flashcardApp');


app.controller('createCtrl', function($scope) {
  console.log('createCtrl!');

  $scope.createCard = newCard => {
    console.log('createCard clicked!');
  }


})

app.controller('listCtrl', function($stateParams, $state) {
  console.log('listCtrl!');



})


app.controller('editCtrl', function($scope, $stateParams, $state) {
  console.log('editCtrl!');

  $scope.editCard = edit => {
    console.log('editCard clicked!');
  }

})


app.controller('quizCtrl', function() {
  console.log('quizCtrl!');


})
