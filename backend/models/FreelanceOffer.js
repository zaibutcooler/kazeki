const mongoose = require("mongoose");

const freelanceOfferSchema = mongoose.Schema({
  title: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  description: { type: String },
  requirements: [{ type: String }],
  requiredSkills: [{ type: String }],
  deadline: { type: Date },
  fixed: { type: Boolean },
  hourlyRate: { from: { type: Number }, to: { type: Number } },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "JobSeeker" },
  fixedRate: { type: Number },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FreelanceOffer", freelanceOfferSchema);
