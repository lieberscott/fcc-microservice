'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // middleware to capture the input field of a form

app.use('/public', express.static(process.cwd() + '/public'));

// ** my code ** //

var urlShortener = require('./urlShortener.js');
let regex = /[https?://]?[www.]?w+/;
// let router = express.Router();

// let createPerson = require('./myApp.js').createAndSavePerson;
// router.get('/create-and-save-person', function(req, res, next) {
//   // in case of incorrect function use wait timeout then respond
//   var t = setTimeout(() => { next({message: 'timeout'}) }, timeout);
//   createPerson(function(err, data) {
//     clearTimeout(t);
//     if(err) { return (next(err)); }
//     if(!data) {
//       console.log('Missing `done()` argument');
//       return next({message: 'Missing callback argument'});
//     }
//      Person.findById(data._id, function(err, pers) {
//        if(err) { return (next(err)); }
//        res.json(pers);
//        pers.remove();
//      });
//   });
// });


app.post("/api/shorturl/new", urlShortener.createShort);


// ** end my code ** //

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  // res.redirect("http://freecodecamp.org");
  res.json({greeting: 'hello API'});
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});