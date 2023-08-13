import Model from "@/database/Reply";
import connectDB from "@/utils/connectDB";
import User from "@/database/User";
//  FreelanceOffer from "@/database/FreelanceOffer";
import JobApplication from "@/database/JobApplication";

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
      itemType: "job",
    });

    await newItem.save();

    const updatedApplication = await JobApplication.findByIdAndUpdate(
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

// export async function GET(req: Request) {
//   try {
//     await connectDB();
//     const { searchParams } = new URL(req.url);
//     const userID = searchParams.get("userID");

//     if (userID) {
//       const items = await JobApplication.find({ user: userID });

//       return new Response(JSON.stringify(items), {
//         status: 200,
//       });
//     }

//     const items = await Model.find();
//     return new Response(JSON.stringify(items), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }
