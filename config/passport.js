// passport config
var User = require('../models/User');
var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());