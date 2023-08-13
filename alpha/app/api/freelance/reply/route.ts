import Model from "@/database/Reply";
import connectDB from "@/utils/connectDB";
import User from "@/database/User";
//  FreelanceOffer from "@/database/FreelanceOffer";
import JobApplication from "@/database/JobApplication";
import FreelanceApplication from "@/database/FreelanceApplication";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { user, title, description, appointment, links, itemID } =
      await req.json();

    const userExists = await User.findById(user);

    if (!userExists) {
      return new Response(JSON.stringify({ message: "Invalid User" }), {
        status: 400,
      });
    }

    const newItem = new Model({
      user,
      title,
      description,
      appointment,
      links,
      itemID,
      itemType: "freelance",
    });

    await newItem.save();

    const updatedApplication = await FreelanceApplication.findByIdAndUpdate(
      itemID,
      { approved: true, reply: newItem._id },
      { new: true }
    );

    console.log(updatedApplication);

    return new Response(JSON.stringify(newItem), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
