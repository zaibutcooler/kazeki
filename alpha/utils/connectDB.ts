import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

const connectDB = () => {
  try {
    mongoose.set("strictQuery", true);

    if (isConnected) {
      console.log("DB is already connected");
      return;
    }

    mongoose.connect(String(process.env.LOCAL_DB), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Kazeki",
    } as ConnectOptions);
    isConnected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log("Error ->", error);
  }
};

export default connectDB;
