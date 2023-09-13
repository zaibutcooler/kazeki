import connectDB from "@/utils/connectDB";
import Model from "@/database/UserProfile";

export async function GET(req: Request) {
  try {
    await connectDB();
    console.log("started");
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      console.log("working");
      const item = await Model.findOne({ _id: id });
      return new Response(JSON.stringify(item), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
