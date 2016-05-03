'use strict';

var mongoose = require('mongoose');

var Card = mongoose.model('Card', {
  category: String,
  quest: String,
  ans: String
});

module.exports = Card;
