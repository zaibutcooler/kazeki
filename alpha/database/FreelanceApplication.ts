import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";
import { UserType } from "./User";
export interface FreelanceApplicationType {
  _id: string;
  user: UserType;
  freelance: string;
  title: string;
  description: string;
  cv: string;
  negoSalary: number;
  links: LinkType[];
  approved: boolean;
  reply: Schema.Types.ObjectId;
  created: Date;
}

export interface FreelanceApplicationCreateType {
  user: string;
  title: string;
  freelance: string;
  description: string;
  cv: string;
  negoSalary: number;
  links: LinkType[];
}

const freelanceApplicationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  cv: { type: String },
  negoSalary: { type: Number },
  links: [
    {
      link: { type: String },
      label: { type: String },
    },
  ],
  approved: { type: Boolean, default: false },
  reply: { type: Schema.Types.ObjectId, ref: "Reply" },
  created: { type: Date, default: Date.now },
});

const FreelanceApplication =
  models.FreelanceApplication ||
  model("FreelanceApplication", freelanceApplicationSchema);

export default FreelanceApplication;
