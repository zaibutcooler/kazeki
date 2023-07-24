import { Schema, model, models } from "mongoose";

const jobOfferSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  requirements: [{ type: String }],
  requireCount: { type: Number },
  onSite: { type: Boolean },
  location: { type: String, default: null },
  salary: { type: Number },
  allowance: [{ type: String }],
  deadline: { type: Date },
  contact: [
    {
      link: { type: String },
      name: { type: String },
    },
  ],
  created: { type: Date },
});

const JobOffer = models.JobOffer || model("JobOffer", jobOfferSchema);

export default JobOffer;
