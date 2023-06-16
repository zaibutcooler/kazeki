const mongoose = require("mongoose");

const jobSeekerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  bio: { type: String },
  bod: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  highSchool: { type: String },
  collage: { type: String },
  pastJobs: [{ type: String }],
  skills: [{ type: String }],
  socialMediaLinks: [{ name: { type: String }, link: { type: String } }],
  photo: { type: Buffer },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JobSeeker", jobSeekerSchema);
