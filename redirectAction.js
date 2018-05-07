'use strict';

let urlShortener = require ("./urlShortener.js");

let express = require('express');

async function redirect(req, res) {
  let site = await Url.findOne({ short: req.short }).limit(1).exec(); // uses short to find entry
  if (site) {
    express.redirect("http://" + site.long);
  }
  
  else {
    res.json({ Error: "No redirect exists for that path" });
  }

}


//----------- Do not edit below this line -----------//

exports.redirect = redirect;