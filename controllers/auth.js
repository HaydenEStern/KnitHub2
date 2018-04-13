var exports = module.exports = {}
var db = require('../models');

exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
 
 db.Pattern.find(
 	{})
 .populate('author')
 .sort('-createdAt')
 .then(function(patterns) {
    res.render('dashboard', { user: req.user, patterns: patterns });
     })
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });

 
}

exports.index = function(req, res) {
	res.redirect('/signup');
}

