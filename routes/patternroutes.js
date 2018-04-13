var patterns = require('../controllers/patterns.js');
var passport = require('passport');
var db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for viewing add patterns form
app.get('/addpatterns', isLoggedIn, patterns.addpatterns);

  // POST route for creating a new pattern
  app.post("/addpatterns", function(req, res) {
    db.Pattern.create(req.body).then(function(dbPost) {
      res.redirect('/mypatterns');    
    });
  });

  // GET route for viewing user patterns
  app.get('/mypatterns', isLoggedIn, patterns.mypatterns);

  
  function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }  
};