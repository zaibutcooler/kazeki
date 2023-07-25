import { Schema, model, models } from "mongoose";

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
