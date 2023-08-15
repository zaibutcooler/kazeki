import JobApplication from "@/database/JobApplication";
import FreelanceApplication from "@/database/FreelanceApplication";
import connectDB from "@/utils/connectDB";
import User from "@/database/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { idArray, type } = await req.json();

    // const x = "64d825c4f5894b5a1d3dcf7d";
    // const result = await JobApplication.find({ job: x });
    // console.log("result", result);
    // return new Response(JSON.stringify(result), {
    //   status: 200,
    // });
    const items = [];

    if (type === "job") {
      for (const id of idArray) {
        const item = await JobApplication.find({ job: id });
        if (item) {
          items.push(item);
        }
      }
    } else if (type === "freelance") {
      for (const id of idArray) {
        const item = await FreelanceApplication.find({
          freelance: id,
        }).populate("reply");
        if (item) {
          items.push(item);
        }
      }
    }

    return new Response(JSON.stringify(items), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
