import { Schema, model, models } from "mongoose";

const jobApplicationSchema = new Schema({
  user: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  cv: { type: String, required: true },
  links: [
    {
      link: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
  approved: { type: Boolean, default: false },
  reply: {
    message: { type: String, default: "" },
    date: { type: Date, default: null },
  },
  created: { type: Date, default: Date.now },
});

const JobApplication =
  models.JobApplication || model("JobApplication", jobApplicationSchema);

export default JobApplication;
