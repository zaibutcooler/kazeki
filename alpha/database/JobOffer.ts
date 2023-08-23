import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";

export interface JobOfferType {
  _id: string;
  user: string;
  title: string;
  description: string;
  company: string;
  requirements: string[];
  responsibilities: string[];
  onSite: boolean;
  location: string | null;
  salary: string[];
  allowance: string[];
  deadline: Date | string;
  contact: LinkType[];

  applicationLimit: number;
  recruitCount: number;

  applicants: string[];

  closed: boolean;
  closedDate: Date;
  updated: Date;
  created: Date;
}

export interface JobOfferCreateType {
  user: string;
  title: string; //
  description: string; //
  company: string;
  requirements: string[]; //
  responsibilities: string[]; //
  onSite: boolean;
  location: string | null;
  salary: string[]; //
  allowance: string[];

  applicationLimit: number;
  recruitCount: number;

  deadline: Date | string; //
  contact: LinkType[]; //
}

const jobOfferSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  company: { type: String },
  requirements: [{ type: String }],
  responsibilities: [{ type: String }],
  onSite: { type: Boolean },
  location: { type: String, default: null },
  salary: [{ type: String }],
  allowance: [{ type: String }],
  deadline: { type: Date },
  contact: [
    {
      link: { type: String },
      label: { type: String },
    },
  ],

  applicationLimit: { type: Number },
  recruitCount: { type: Number },

  applicants: { type: [String] },

  closed: { type: Boolean, default: false },
  closedDate: { type: Date },
  updated: { type: Date },
  created: { type: Date, default: Date.now },
});

const JobOffer = models.JobOffer || model("JobOffer", jobOfferSchema);

export default JobOffer;
