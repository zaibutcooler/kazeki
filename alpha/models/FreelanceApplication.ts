import { Schema, model, models } from "mongoose";

const freelanceApplicationSchema = new Schema({
  user: { type: String },
  title: { type: String },
  description: { type: String },
  cv: { type: String },
  negoSalary: { type: Number },
  links: [
    {
      link: { type: String },
      name: { type: String },
    },
  ],
  approved: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

const FreelanceApplication =
  models.FreelanceApplication ||
  model("FreelanceApplication", freelanceApplicationSchema);

export default FreelanceApplication;
