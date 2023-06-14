const mongoose = require("mongoose");

const jobApplicationSchema = mongoose.Schema({
  title: { type: String },
  body: { type: String },
  document: {
    data: Buffer,
    contentType: String,
  },
  otherLinks: [{ name: String, link: { type: String } }],
  expectedAmount: { type: Number },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JobApplication", jobApplicationSchema);
