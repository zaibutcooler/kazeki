import { Schema, model, models } from "mongoose";

const replySchema = new Schema({
  title: { type: String },
  description: { type: String },
  appointment: { type: Date },
  link: [
    {
      link: { type: String },
      name: { type: String },
    },
  ],
  created: { type: Date, default: Date.now },
});

const Reply = models.Reply || model("Reply", replySchema);

export default Reply;
