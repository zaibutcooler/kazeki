import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";
export interface FreelanceOfferType {
  _id: string;
  user: Schema.Types.ObjectId;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string[]; // From 0 $
  field: string[];
  projectDeadline: Date | string; // 1 day / 2 days / 3 days / 1 week / 1 month
  contact: LinkType[];
  deadline: Date | string; // 1 day / 2 days / 3 days / 1 week / 1 month

  applicationLimit: number;
  recuritAmoumt: number;

  applicants: string[];

  created: Date;
  updated: Date;
}

export interface FreelanceOfferCreateType {
  user: Schema.Types.ObjectId | string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string[]; // From 0 $
  field: (string | Date)[];
  projectDeadline: Date | string; // 1 day / 2 days / 3 days / 1 week / 1 month

  applicationLimit: number;
  recuritAmoumt: number;

  contact: LinkType[];
  deadline: Date | string;
}

const freelanceOfferSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  requirements: [{ type: String }],
  responsibilities: [{ type: String }],
  salary: [{ type: String }], // From 0 $
  field: [{ type: String || Date }], // web / software / programming / video-editing / copy-writing
  projectDeadline: { type: Date }, // 1 day / 2 days / 3 days / 1 week / 1 month

  contact: [
    {
      link: { type: String }, // Contact link
      label: { type: String }, // Contact name
    },
  ],

  applicationLimit: { type: Number },
  recuritAmoumt: { type: Number },

  applicants: { type: [String] },

  deadline: { type: Date || String }, // 1 day / 2 days / 3 days / 1 week / 1 month
  updated: { type: Date },
  created: { type: Date, default: Date.now },
});

const FreelanceOffer =
  models.FreelanceOffer || model("FreelanceOffer", freelanceOfferSchema);

export default FreelanceOffer;
