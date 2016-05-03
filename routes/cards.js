var express = require('express');
var router = express.Router();

var Card = require('../models/card');

//  POST  /api/cards   --->  create a new card

//  GET   /api/cards   --->  return array of all cards
router.get('/', (req, res) => {
  Card.find({}, (err, cards) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(cards);
    }
  });
});

//  GET   /api/cards/:id   --->  return one card by id
router.get('/:id', (req, res) => {

  Card.findById(req.params.id, (err, card) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(card);
    }
  });

});

//  DELETE   /api/cards/:id   --->  delete one card by id
router.delete('/:id', (req, res) => {
  Card.findByIdAndRemove(req.params.id, err => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});

//  POST  /api/cards   --->  create a new card
router.post('/', (req, res) => {
  var card = new Card(req.body);

  card.save((err, savedCard) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(savedCard);
    }
  });
});

//  PUT   /api/cards/:id   --->  update one card
router.put('/:id', (req, res) => {

  // req.params.id  -->  document id
  // req.body  --->  update obj

  Card.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, card) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(card);
    }
  });
});

module.exports = router;
