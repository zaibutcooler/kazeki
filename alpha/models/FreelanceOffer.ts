import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";
export interface FreelanceOfferType {
  _id: string;
  user: Schema.Types.ObjectId;
  title: string;
  detail: string;
  requirements: string[];
  responsibilities: string[];
  salary: { from: number; to: number };
  field: string[];
  timeRange: string;
  contact: LinkType[];
  formClose: string;
  created: Date;
}

export interface FreelanceOfferCreateType {
  user: string; // Assuming you have a string representation of Schema.Types.ObjectId
  title: string;
  detail: string;
  requirements: string[];
  responsibilities: string[];
  salary: { from: number; to: number };
  field: string[];
  timeRange: string;
  contact: LinkType[];
  // No need to include the 'created' field here as it is automatically set in the Mongoose schema with default value.
}

const freelanceOfferSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  detail: { type: String },
  requirements: [{ type: String }],
  responsibilities: [{ type: String }],
  salary: { from: { type: Number }, to: { type: Number } }, // From 0 $
  field: [{ type: String }], // web / software / programming / video-editing / copy-writing
  timeRange: { type: String }, // 1 day / 2 days / 3 days / 1 week / 1 month
  contact: [
    {
      link: { type: String }, // Contact link
      label: { type: String }, // Contact name
    },
  ],
  formClose: { type: String }, // 1 day / 2 days / 3 days / 1 week / 1 month
  created: { type: Date, default: Date.now },
});

const FreelanceOffer =
  models.FreelanceOffer || model("FreelanceOffer", freelanceOfferSchema);

export default FreelanceOffer;
