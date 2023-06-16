const mongoose = require("mongoose");

const freelanceApplicationSchema = mongoose.Schema({
  title: { type: String },
  body: { type: String },
  document: {
    data: Buffer,
    contentType: String,
  },
  otherLinks: [{ name: String, link: { type: String } }],
  expectedAmount: { type: Number },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "JobSeeker" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model(
  "FreelanceApplication",
  freelanceApplicationSchema
);
