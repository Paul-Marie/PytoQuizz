const mongoose = require("mongoose");

// question model
const questionSchema = new mongoose.Schema({
  text:   { type: String, required: true },
  answer: { type: String, required: true },
  image:  { type: String                 },
  theme:  { type: String                 }
});

module.exports = mongoose.model("question", questionSchema);
