import User from "@/models/User";
import { UserType } from "@/models/User";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    await connectDB();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return new Response(JSON.stringify({ message: "Email Already exists" }), {
        status: 401,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    console.log("passed two");
    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
