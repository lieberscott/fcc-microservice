'use strict';

console.log("hello1");

let mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URI);

// let cors = require('cors');
let dns = require('dns');
// let express = require('express');
// let app = express();
// let bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); // middleware to capture the input field of a form

let Schema = mongoose.Schema;

let UrlSchema = new Schema({
  long: {
    type: String,
    required: true
  },
  short: Number
});

let Url = mongoose.model("Url", UrlSchema);

exports.createShort = function(req, res) {
  let url = req.body.url; // captures input field of form; "url" here matches <input name="url"> in index.html file
  let len = Url.count({});
  console.log(len);
  let last = Url.findOne({ short: len }, "short", function(err, data) {
    if (err) {
      let short = new Url({
        long: url,
        short: 1
      });
      
      short.save((err, data) => {
        if (err) { console.log("saving error") }
        else { console.log("saving success") }
      });
      console.log("first entry");
    }
    else { console.log("no error") }
  });
  // console.log(last);

//   let short = new Url({
//   long: url,
//   short: last + 1
// });
  
//   short.save((err, data) => {
//     if (err) { console.log(err) }
//     else { console.log(data) }
//   });
  
  res.json({hello: url});
};


// let queryChain = function(done) {
//   let foodToSearch = "burrito";
  
//   let burritoLovers = Person.find({favoriteFoods: foodToSearch});
  
//   burritoLovers.sort({ name: "asc" }).limit(2).select("-age").exec((err, data) => {
//     if (err) { done(err) }
//     else { done(null, data) }
//   });
// };




//----------- Do not edit below this line -----------//

exports.UrlModel = Url;
// exports.createShort = createShort;