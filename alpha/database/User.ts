import { Schema, model, models } from "mongoose";

export interface UserType {
  _id: string;
  email: string;
  password: string;
  userProfile: string;
}

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userProfile: { type: Schema.Types.ObjectId, ref: "UserProfile" },
  created: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);

export default User;
