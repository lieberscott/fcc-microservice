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
  let len;
  async function dbOperations() {
    // let len;
    len = await Url.count({}).exec();
    // console.log(len);
}
  dbOperations();
  console.log(len);
//   let len = Url.count({});
//   len.then(num => len = num);
//   console.log(len);
//   let last = Url.findOne({ short: 0 }, "short", function(err, data) {
//     if (err) {
//       let short = new Url({
//         long: url,
//         short: 1
//       });
      
//       short.save((err, data) => {
//         if (err) { console.log("saving error") }
//         else { console.log("saving success") }
//       });
//       console.log("first entry");
//     }
//     else { console.log("no error") }
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
exports.createShort = createShort;