import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";

export interface PastJobsType {
  employer: string;
  from: string;
  to: string;
}

export interface ProfileType {
  user: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  client: boolean;
  company?: string; // If client is true
  industry: string;
  // highSchool?: string; // If client is false
  collage?: { school: string; graduated: boolean }; // If client is false
  pastJobs?: PastJobsType[]; // If client is false
  links?: LinkType[];
  created: Date;
}

export interface ClientCreateType {
  user: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  client: boolean;
  company?: string; // If client is true
  industry: string;
  links?: LinkType[];
}

export interface SeekerCreateType {
  user: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  client: boolean;
  industry: string;
  collage?: { school: string; graduated: boolean };
  pastJobs?: PastJobsType[];
  links?: LinkType[];
}

const userProfileSchema = new Schema({
  user: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  //profile image
  country: { type: String },
  city: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  client: { type: Boolean },
  company: { type: String },
  industry: { type: String },
  collage: { school: { type: String }, graduated: { type: Boolean } },
  pastJobs: [
    { employer: { type: String }, from: { type: Date }, to: { type: Date } },
  ],
  links: [{ label: { type: String }, link: { type: String } }],
  created: { type: Date, default: Date.now },
});

const UserProfile =
  models.UserProfile || model("UserProfile", userProfileSchema);

export default UserProfile;
