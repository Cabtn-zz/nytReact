// First, we hook mongoose into the model with a require
const mongoose = require("mongoose");

// Then, we save the mongoose.Schema class as simply "Schema"
const Schema = mongoose.Schema;

// This is where we decide how our data must look before we accept it in the server, and how to format it in mongoDB
const NYTimesSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  link: String,
  comments: String,
  date: {
    type: Date,
    default: Date.now
  },
});

// This creates our model from the above schema, using mongoose's model method
const Articles = mongoose.model("NYTimes", NYTimesSchema);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = Articles;
