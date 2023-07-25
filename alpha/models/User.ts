import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: [true, "Need an email "] },
  username: { type: String, required: [true, "Need an username"] },
  password: { type: String, required: [true, "Required a password"] },
  userProfile: { type: Schema.Types.ObjectId, ref: "UserProfile" },
  created: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);

export default User;
