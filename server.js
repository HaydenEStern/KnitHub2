
// Require our dependencies
const express = require("express"),
 mongoose = require("mongoose"),
 exphbs = require("express-handlebars"),
 bodyParser = require("body-parser"),
 passport = require('passport'),
 session = require('express-session'),
LocalStrategy = require('passport-local');


// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();
// Designate our public folder as a static directory
app.use(express.static("public"));
// Use bodyParser in our app
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json; charset=UTF-8'}));


// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





var db = require("./models");

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//load passport strategies

passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

//Routes
var authroutes = require('./routes/authroutes')(app,passport),
commentroutes = require('./routes/commentroutes')(app,passport),
patternroutes = require('./routes/patternroutes')(app,passport);



// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/knitHub";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});