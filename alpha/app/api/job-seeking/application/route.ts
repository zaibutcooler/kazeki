import Model from "@/database/JobApplication";
import connectDB from "@/utils/connectDB";
import User from "@/database/User";
import JobOffer from "@/database/JobOffer";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { user, title, job, description, cv, links } = await req.json();

    const userExists = await User.findById(user);

    if (!userExists) {
      return new Response(JSON.stringify({ message: "Invalid User" }), {
        status: 400,
      });
    }

    const offer = await JobOffer.findById(job);
    if (offer.applicants.includes(user)) {
      return new Response(JSON.stringify({ message: "User already applied" }), {
        status: 400,
      });
    }

    const newItem = new Model({
      user,
      title,
      job,
      description,
      cv,
      links,
    });
    await newItem.save();

    const updatedOffer = await JobOffer.findByIdAndUpdate(
      job,
      {
        $push: { applicants: user },
      },
      { new: true }
    );

    console.log(updatedOffer);

    return new Response(JSON.stringify(newItem), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const userID = searchParams.get("userID");

    if (userID) {
      const items = await Model.find({ user: userID });
      return new Response(JSON.stringify(items), {
        status: 200,
      });
    }
    const items = await Model.find();
    return new Response(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
