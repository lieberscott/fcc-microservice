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
  let url = req.body.url; // captures input field of form; "url" here matches <input name="url"> in index.html file
  
  async function checkRepeat(url) { // check if url is already in there
    let check = await Url.findOne({long: url});

    if (check) {
      console.log("second-secondtest");
      console.log(check);
    }
    else {
      console.log("second-firsttest");
      addUrl();
    }
  };
  
  
  console.log("first");
  checkRepeat(url);
  
  
  async function addUrl() {
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
    }
    
    else {
      
      console.log("third-firsttest");
      
      newshort = new Url({
        long: url,
        short: len.short + 1
      });
      
      newshort.save((err, data) => {
        if (err) { console.log(err) }
        else { console.log(data) }
      });
    }
  }
  
  // addUrl();
  console.log("end of file");
  res.json({hello: url});
};




//----------- Do not edit below this line -----------//

exports.UrlModel = Url;
exports.createShort = createShort;