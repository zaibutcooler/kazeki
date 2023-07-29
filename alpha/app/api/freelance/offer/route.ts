import Model from "@/models/FreelanceOffer";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const {
      user,
      title,
      detail,
      requirements,
      responsibilities,
      salary,
      field,
      timeRange,
      contact,
      formClose,
    } = await req.json();

    const userExists = await User.findById(user);

    if (!userExists) {
      return new Response(JSON.stringify({ message: "Invalid User" }), {
        status: 400,
      });
    }
    const newItem = new Model({
      user,
      title,
      detail,
      requirements,
      responsibilities,
      salary,
      field,
      timeRange,
      contact,
      formClose,
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
