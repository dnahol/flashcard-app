'use strict';

var app = angular.module('flashcardApp');


app.controller('createCtrl', function(Cards, $scope) {
  console.log('createCtrl!');

  $scope.createCard = () => {
    var newCard = Cards.create($scope.newCard);
    console.log('newCard returned: ', newCard);
  }

})

app.controller('listCtrl', function($scope, allCards) {
  console.log('listCtrl!');
  console.log('allCards: ', allCards);

  $scope.cards = allCards.data; 


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
