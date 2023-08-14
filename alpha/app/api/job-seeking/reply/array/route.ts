import JobApplication from "@/database/JobApplication";
import FreelanceApplication from "@/database/FreelanceApplication";
import connectDB from "@/utils/connectDB";
import User from "@/database/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { idArray, type } = await req.json();

    let items: any[] = [];
    console.log("reached");

    if (type === "job") {
      items = await JobApplication.find({ job: { $in: idArray } }).populate(
        "reply"
      );
    } else if (type === "freelance") {
      items = await FreelanceApplication.find({
        freelance: { $in: idArray },
      }).populate("reply");
    }

    return new Response(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
