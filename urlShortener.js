'use strict';

console.log("hello1");

let mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URI);

let dns = require('dns');

let Schema = mongoose.Schema;

let UrlSchema = new Schema({
  long: {
    type: String,
    required: true
  },
  short: Number
});

let Url = mongoose.model("Url", UrlSchema);

let regex = /^[https?://]?[www.]?w+/;

let createShort = function(req, res) {
  let newlink = req.body.url; // captures input field of form; "url" here matches <input name="url"> in index.html file
  
  async function checkRepeat(url) { // check if url is already in database
    let check = await Url.findOne({long: url});

    if (check) { // already exists, so return info
      res.json({
        long: check.long,
        short: check.short
      });
    }
    
    else {
      addUrl(url);
    }
  };
  
  checkRepeat(newlink);
  
  
  async function addUrl(url) {
    let len;
    len = await Url.findOne().sort({ short: -1 }).limit(1).exec() // gets most recent entry using short field
    console.log("len: " + len.short);
    let newshort;    
    
    if (len == null) { // first entry in database
      newshort = new Url({
        long: url,
        short: 1
      });
      
      newshort.save((err, data) => {
        if (err) { console.log(err) }
        else { console.log(data) }
      });
      
      res.json(newshort);
    }
    
    else {
      
      newshort = new Url({
        long: url,
        short: len.short + 1
      });
      
      newshort.save((err, data) => {
        if (err) { console.log(err) }
        else { console.log(data) }
      });
      
      res.json(newshort);
    }
  }
  
  // res.json({hello: newlink});
};




//----------- Do not edit below this line -----------//

exports.UrlModel = Url;
exports.createShort = createShort;