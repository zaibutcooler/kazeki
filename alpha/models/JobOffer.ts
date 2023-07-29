import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";

export interface JobOfferType {
  _id: string;
  user: Schema.Types.ObjectId;
  title: string;
  description: string;
  requirements: string[];
  requireCount: number;
  onSite: boolean;
  location: string | null;
  salary: number;
  allowance: string[];
  deadline: Date;
  contact: LinkType[];
  created: Date;
}

export interface JobOfferCreateType {
  user: string; // Assuming you have a string representation of Schema.Types.ObjectId
  title: string;
  description: string;
  requirements: string[];
  requireCount: number;
  onSite: boolean;
  location: string | null;
  salary: number;
  allowance: string[];
  deadline: Date;
  contact: LinkType[];
  // No need to include the 'created' field here as it is automatically set in the Mongoose schema with default value.
}

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
      label: { type: String },
    },
  ],
  created: { type: Date },
});

const JobOffer = models.JobOffer || model("JobOffer", jobOfferSchema);

export default JobOffer;
