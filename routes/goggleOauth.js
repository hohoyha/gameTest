var google = require('googleapis');
var express = require('express');
var OAuth2 = google.auth.OAuth2;
var router = express.Router();
var request = require('request');


var oauth2Client = new OAuth2(
  '175447935537-as2cufi237nvbvjl2jfas214dlv588p9.apps.googleusercontent.com',
  'Dx9dx3ciOm2r9ms6ochFhnkV',
  'http://localhost:3000/oauth/callback'
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.readonly'
];

var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
});

router.get('/', function(req, res){
   
    res.redirect(url);
});


router.get('/callback', function(req, res){
    var code = req.query.code;

    oauth2Client.getToken(code, function (err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
        if (!err) {
            oauth2Client.setCredentials(tokens);
            res.render('oauth', {title:'auth', code: req.query.code});
        }
    });

  
});


module.exports = router;

