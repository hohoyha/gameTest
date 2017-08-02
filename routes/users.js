var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res){
  res.render('login', {title:'Login'});
})

router.post('/login', function(req, res){
  var nick = req.body.username;
  var password = req.body.password;
  res.send( nick + ',' + password );
});

module.exports = router;
