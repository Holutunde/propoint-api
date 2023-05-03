const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
  residence: {
    type: String,
    required: true,
  },
  simtype: {
    type: String,
    required: true,
  },
  geopoliticalzone: {
    type: String,
    required: true,
  },
  networktype: {
    type: String,
    required: true,
  },
  sendtext: {
    type: String,
    required: true,
  },
  browse: {
    type: String,
    required: true,
  },
  networkstrength: {
    type: String,
    required: true,
  },
  ratenetwork: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Survey", SurveySchema);
