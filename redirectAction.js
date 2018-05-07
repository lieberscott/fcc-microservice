'use strict';

let Url = require("./urlShortener.js").UrlModel;

let express = require('express');

async function redirect(req, res) {
  let site = await Url.findOne({ short: req.short }).limit(1).exec(); // uses short to find entry
  if (site) {
    res.redirect("http://" + site.long);
  }
  
  else {
    res.json({ Error: "No entry matches that path" });
  }

}


//----------- Do not edit below this line -----------//

exports.redirect = redirect;