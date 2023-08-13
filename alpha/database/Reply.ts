import { Schema, model, models } from "mongoose";
import { LinkType } from "./types";

export interface ReplyType {
  _id: string;
  user: string;
  title: string;
  description: string;
  appointment: Date;
  links: LinkType[];
  itemID: string;
  created: Date;
}

export interface ReplyCreateType {
  user: string;
  title: string;
  description: string;
  appointment: Date;
  links: LinkType[];
  itemID: string;
}

const replySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  appointment: { type: Date },
  link: [
    {
      link: { type: String },
      label: { type: String },
    },
  ],
  itemID: { type: Schema.Types.ObjectId },
  itemType: { type: String },
  created: { type: Date, default: Date.now },
});

const Reply = models.Reply || model("Reply", replySchema);

export default Reply;
