'use strict';

// The Package is past automatically as first parameter
module.exports = function(Showcase, app, auth, database) {

  app.get('/showcase/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/showcase/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/showcase/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/showcase/example/render', function(req, res, next) {
    Showcase.render('index', {
      package: 'showcase'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
