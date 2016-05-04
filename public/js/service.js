'use strict';

var app = angular.module('flashcardApp');


app.service('Cards', function($http) {

  this.getAll = () => {
    return $http.get('/api/cards');
  };

  this.create = cardInfo => {
    return $http.post('/api/cards', cardInfo);
  };


  this.getById = id => {
    return $http.get(`/api/cards/${id}`);
  };

  this.update = edit => {
    return $http.put(`/api/cards/${edit.id}`, edit);
  };

  this.delete = id => {
    return $http.delete(`/api/cards/${id}`);
  };

  this.getAllCategories = () => {
    var allCards = this.getAll();
  };


});
