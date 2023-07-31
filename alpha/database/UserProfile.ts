import { Schema, model, models } from "mongoose";

export interface ProfileType {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  client: boolean;
  company?: string; // If client is true
  highSchool?: string; // If client is false
  collage?: [{ school: string; graduated: boolean }]; // If client is false
  pastJobs?: [{ employer: string; from: Date; to: Date }]; // If client is false
  links?: [{ name: string; url: string }];
  created: Date;
}

const userProfileSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  //profile image
  country: { type: String },
  city: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  client: { type: Boolean },
  //if true
  company: { type: String },

  //if not
  highSchool: { type: String },
  collage: [{ school: { type: String }, graduated: { type: Boolean } }],
  pastJobs: [
    { employer: { type: String }, from: { type: Date }, to: { type: Date } },
  ],
  //documents

  links: [{ name: { type: String }, url: { type: String } }],

  created: { type: Date, default: Date.now },
});

const UserProfile =
  models.UserProfile || model("UserProfile", userProfileSchema);

export default UserProfile;
