var express = require('express');
var router = express.Router();

/* GET users page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Available Runs' });
});

module.exports = router;
