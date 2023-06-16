const mongoose = require("mongoose");

const jobOfferSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  country: { type: String },
  city: { type: String },
  location: { type: String },
  onsite: { type: Boolean },
  requirements: [{ type: String }],
  responsibilities: [{ type: String }],
  contactLink: [{ name: { type: String }, link: { type: String } }],
  salaryRange: { from: { type: Number }, to: { type: Number } },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JobOffer", jobOfferSchema);
