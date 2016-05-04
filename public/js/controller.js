'use strict';

var app = angular.module('flashcardApp');


app.controller('createCtrl', function(Cards, $scope) {
  console.log('createCtrl!');

  $scope.createCard = () => {
    Cards.create($scope.newCard);
    $scope.newCard = ''
  }
})

app.controller('listCtrl', function(Cards, $scope, allCards) {
  console.log('listCtrl!');

  $scope.cards = allCards.data;

  $scope.deleteCard = card => {
    console.log('card: ', card);
    var index = $scope.cards.indexOf($scope.card);

    $scope.cards.splice(index, 1);
    Cards.delete(card._id);
  }
})


app.controller('editCtrl', function(Cards, $scope, id) {
  console.log('editCtrl!');

  $scope.editCard = edit => {
    edit.id = id;
    Cards.update(edit);
    $scope.edit = '';
  }
})


app.controller('quizCtrl', function(Cards, $scope) {
  console.log('quizCtrl!');


  // console.log('dogCards: ', dogCards);
  // $scope.startQuiz = () => {
  //   var cards = []
  //   console.log('$scope.categories: ',  $scope.categories );

    // for(var i; i < $scope.categories.length; i++) {
    //   Cards.getAll();
    //   var catCards = allCards.filter(function(card) {
    //     return card.category === category;
    //   });
    //

    //   console.log('catCards: ', catCards);
    //   cards.concat.catCards;
    // }
    // $scope.quizCards = cards;
    // $scope.index = 0;
  // }
})
