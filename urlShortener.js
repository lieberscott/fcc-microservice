console.log("hello1");

let mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URI);

let Schema = mongoose.Schema;

let UrlSchema = new Schema({
  long: {
    type: String,
    required: true
  },
  short: Number
});

let Url = mongoose.model("Url", UrlSchema);

let createShort = function(url, done) {
  let short = new Url({
  long: "http://www",
  age: 34,
  favoriteFoods: ["Pizza", "Burgers", "Fries", "Milkshakes"]
});
  
  let lastentry = Url.find({
  
  short.save((err, data) => {
    if (err) { done(err) }
    else { done(null, data) }
  });
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