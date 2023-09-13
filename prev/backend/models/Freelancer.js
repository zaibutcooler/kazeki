const mongoose = require("mongoose");

const freelancerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  bio: { type: String },
  bod: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  highSchool: { type: String },
  collage: { type: String },
  skills: [{ type: String }],
  socialMediaLinks: [{ name: { type: String }, link: { type: String } }],
  pastJobs: [{ type: String }],
  photo: { type: Buffer },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Freelancer", freelancerSchema);
