'use strict';

var app = angular.module('flashcardApp');


app.controller('createCtrl', function(Cards, $scope) {
  console.log('createCtrl!');

  $scope.createCard = () => {
    var newCard = Cards.create($scope.newCard);
  }
})

app.controller('listCtrl', function(Cards, $scope, allCards) {
  console.log('listCtrl!');

  $scope.cards = allCards.data;

  $scope.deleteCard = id => {
    console.log(id);
    Cards.delete(id);
    location.reload();
  }

})


app.controller('editCtrl', function(Cards, $scope, id) {
  console.log('editCtrl!');

  $scope.editCard = edit => {
    edit.id = id;
    Cards.update(edit);
  }

})


app.controller('quizCtrl', function() {
  console.log('quizCtrl!');

})
