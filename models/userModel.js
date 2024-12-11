var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//console.log("hiiii1");

const DataSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    university: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { collection: "addUser" }
);

module.exports = mongoose.model("Data", DataSchema);
