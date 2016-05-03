var express = require('express');
var router = express.Router();

router.use('/cards', require('./cards'));

module.exports = router;
