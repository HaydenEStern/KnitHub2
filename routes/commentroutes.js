
var passport = require('passport');
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

// function that doesn't allow pageload unless user is authenticated
  function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

  // POST route for creating a new comment on dashboard
  app.post("/dashboard", isLoggedIn, function(req, res) {
    db.Comment.create(req.body).then(function(dbPost) {
      res.redirect('/dashboard');    
    });
  });

   // POST route for creating a new comment on dashboard
  app.post("/mypatterns", isLoggedIn, function(req, res) {
    db.Comment.create(req.body).then(function(dbPost) {
      res.redirect('/mypatterns');    
    });
  });

};