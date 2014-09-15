'use strict';

// User routes use users controller
//var users = require('../controllers/users');
 var Recaptcha = require('recaptcha').Recaptcha;

module.exports = function(MeanUser, app, auth, database, passport) {


  app.route('/users/captcha')
  .get(function(req,res){

   var recaptcha = new Recaptcha('6Ld4QPoSAAAAAK7zweqEBGdyaABgQYy6OGi19Pc0','6Ld4QPoSAAAAAEgh1VRwCG6weY6DupJWEphrPJ6a');
   res.end(recaptcha.toHTML());
 });
  // })
  // .post(function(req,res){
  //  var data = {
  //    remoteip:  req.connection.remoteAddress,
  //    challenge: req.body.recaptcha_challenge_field,
  //    response:  req.body.recaptcha_response_field
  //  };
  //  var recaptcha = new Recaptcha('6Ld4QPoSAAAAAK7zweqEBGdyaABgQYy6OGi19Pc0', '6Ld4QPoSAAAAAEgh1VRwCG6weY6DupJWEphrPJ6a', data);

  //  recaptcha.verify(function(success, error_code) {
  //    if (success) {
  //      res.send('Recaptcha response valid.');
  //    }
  //    else {
  //      res.render('index',{
  //        captcha : recaptcha.toHTML()
  //      });
  //    }
  //  });
  // });


};
