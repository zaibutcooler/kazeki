import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectMongoDB = () => {
  try {
    mongoose.set("strictQuery", true);

    if (isConnected) {
      console.log("DB is already connected");
      return;
    }

    mongoose.connect(String(process.env.MONGODB_URL), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Premia",
    } as ConnectOptions);
    isConnected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log("Error ->", error);
  }
};

export const blogSchema = new mongoose.Schema({
  title: { type: String },
  prompt: { type: String },
  image: { type: String },
  contents: [
    {
      type: { type: String },
      text: { type: String },
    },
  ],
  minRead: { type: Number },
  topic: [{ type: String }],
  created: { type: Date, default: Date.now },
});

export type BlogType = typeof blogSchema;

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
