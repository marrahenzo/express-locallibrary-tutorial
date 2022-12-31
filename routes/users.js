var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function (req, res, next) {
  res.render('cool', {
    title: 'Welcome to the cool section',
    message: 'You are cool!'
  });
});

module.exports = router;
