var auth = require('../controllers/auth.js');
var passport = require('passport');
var User = require('../models/User');


module.exports = function(app) {

    app.get('/signup', auth.signup);
    app.get('/signin', auth.signin);
    app.post('/signup', function(req, res, next) {
        console.log('registering user');
        User.register(new User({ username: req.body.username, email: req.body.email, firstname: req.body.firstname, lastname: req.body.lastname }), req.body.password, function(err) {
            if (err) {
                console.log('error while user register!', err);
                res.redirect('/signup');
            }

            passport.authenticate('local')(req, res, function() {
                res.redirect('/dashboard');
            });

        })
    });



    app.get('/dashboard', isLoggedIn, auth.dashboard);
    app.get('/logout', auth.logout);


    app.post('/signin', (req, res) => passport.authenticate('local', { successRedirect: '/dashboard', failureRedirect: '/signin', })(req, res));

    app.get('/', auth.index);

  function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }
}