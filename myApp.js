let mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

let Schema = mongoose.Schema;

let UrlSchema = new Schema({
  long: {
    type: String,
    required: true
  },
  short: Number
});

let Url = mongoose.model("Url", UrlSchema);

let createShort = function(done) {
  let short = new Url({
  name: "Scott",
  age: 34,
  favoriteFoods: ["Pizza", "Burgers", "Fries", "Milkshakes"]
});
  
  short.save((err, data) => {
    if (err) { done(err) }
    else { done(null, data) }
  });
};





//----------- Do not edit below this line -----------//

exports.UrlModel = Url;