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

let createShort = function(req, res) {
  let url = req.body.url; // captures input field of form; "url" here matches <input name="url"> in index.html file
  
  async function checkRepeat(url) {
    let check = await Url.findOne({long: url});
    console.log(check);
    
    if (check) {
      res.json(check);
    }
    else {
      console.log(check);
    }
  };
  
  
  async function addUrl() {
    let len;
    len = await Url.findOne().sort({ id: -1 }).exec() // gets most recent entry using id field (can use any field)
    console.log("len: " + len);
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
  
  // res.json({hello: url});
};




//----------- Do not edit below this line -----------//

exports.UrlModel = Url;
exports.createShort = createShort;