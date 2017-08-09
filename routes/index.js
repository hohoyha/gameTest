var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', function(req, res){
    // res.send('googgle api');
    res.render('oauth', {title:'auth', code: req.query.code});
});

router.get('/refresh', function(req, res){
    res.render('refreshToken', {title:'refresh', refresh:req.query.refresh });
});

router.get('/count', function(req, res){
  
  if( req.cookies.count)
  {
      req.cookies.count++;
  }
  else{
      req.cookies.count = 1; 
  }

 var  count = req.cookies.count;

  res.cookie('count', count);

  res.send('Count: ' + req.cookies.count);
});

router.get('/signedcount', function(req, res){
  
  if( req.signedCookies.count)
  {
      req.signedCookies.count++;
  }
  else{
      req.signedCookies.count = 1; 
  }

 var  count = req.signedCookies.count;

  res.cookie('signedcount', count, {signed:true});

  res.send('Count: ' + req.signedCookies.count);
});


router.get('/sessioncount', function(req, res){
  
  if( req.session.count)
  {
      req.session.count++;
  }
  else{
      req.session.count = 1; 
  }

  res.send('Count: ' + req.session.count);
});



module.exports = router;
