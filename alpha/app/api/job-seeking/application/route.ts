import Model from "@/models/JobApplication";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { user, ttile, description, cv, links } = await req.json();

    const userExists = await User.findById(user);

    if (!userExists) {
      return new Response(JSON.stringify({ message: "Invalid User" }), {
        status: 400,
      });
    }
    const newItem = new Model({
      user,
      ttile,
      description,
      cv,
      links,
    });
    await newItem.save();

    return new Response(JSON.stringify(newItem), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
