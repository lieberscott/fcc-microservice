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





//----------- Do not edit below this line -----------//

exports.UrlModel = Url;