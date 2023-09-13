const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  bio: { type: String },
  bod: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  organization: { type: String },
  organizationLink: { type: String },
  contactLink: [{ name: { type: String }, link: { type: String } }],
  photo: { type: Buffer },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Client", clientSchema);
