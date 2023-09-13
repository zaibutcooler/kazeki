import connectDB from "@/utils/connectDB";
import User from "@/database/User";
import Model from "@/database/UserProfile";
import { ClientCreateType } from "@/database/UserProfile";

export async function POST(req: Request) {
  try {
    await connectDB();
    const {
      user,
      firstName,
      lastName,
      country,
      city,
      email,
      phoneNumber,
      client,
      company,
      industry,
      links,
    }: ClientCreateType = await req.json();
    const userExists = await User.findById(user);
    if (!userExists) {
      return new Response(JSON.stringify({ message: "Invalid User" }), {
        status: 400,
      });
    }

    if (userExists.userProfile) {
      return new Response(
        JSON.stringify({ message: "User already has profile" }),
        {
          status: 400,
        }
      );
    }

    const newItem = new Model({
      user,
      firstName,
      lastName,
      country,
      city,
      email,
      phoneNumber,
      client,
      company,
      industry,
      links,
    });
    await newItem.save();

    const updatedUser = await User.findByIdAndUpdate(
      userExists._id,
      {
        userProfile: newItem._id,
      },
      { new: true }
    );

    if (updatedUser) {
      console.log("user updated", updatedUser);
    }

    return new Response(JSON.stringify(newItem), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
