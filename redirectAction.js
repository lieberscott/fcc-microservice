'use strict';

let urlShortener = require ("./urlShortener.js");

let express = require('express');

async function redirect (req, res) => {
  let site = await Url.findOne().sort({ short: req.name }).limit(1).exec(); // gets most recent entry using short field
}


//----------- Do not edit below this line -----------//

exports.redirect = redirect;