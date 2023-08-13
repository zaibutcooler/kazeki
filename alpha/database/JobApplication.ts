import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";
import { UserType } from "./User";
export interface JobApplicationType {
  _id: string;
  user: UserType;
  job: string;
  title: string;
  description: string;
  cv: string;
  links: LinkType[];
  approved: boolean;
  reply: Schema.Types.ObjectId;
  created: Date;
}

export interface JobApplicationCreateType {
  user: string; // Assuming you have a string representation of Schema.Types.ObjectId
  title: string;
  job: string;
  description: string;
  cv: string;
  links: LinkType[];
  // No need to include the 'approved', 'reply', and 'created' fields here as they are automatically set in the Mongoose schema with default values.
}

const jobApplicationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  job: { type: Schema.Types.ObjectId, ref: "JobOffer" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  cv: { type: String, required: true },
  links: [
    {
      link: { type: String, required: true },
      label: { type: String, required: true },
    },
  ],
  approved: { type: Boolean, default: false },
  reply: { type: Schema.Types.ObjectId, ref: "Reply" },
  created: { type: Date, default: Date.now },
});

const JobApplication =
  models.JobApplication ||
  model<JobApplicationType>("JobApplication", jobApplicationSchema);

export default JobApplication;
