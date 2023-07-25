import { NextResponse } from "next/server";
import FreelanceApplication from "@/models/FreelanceApplication";

export async function GET() {
  const result = await FreelanceApplication.find();
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const data = await request.json();
  const { postData } = data;
  const result = new FreelanceApplication({ postData });

  await result.save();
  return NextResponse.json(result);
}

export async function PATCH(request: Request) {
  const data = await request.json();
  const {} = data;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const result = await FreelanceApplication.findByIdAndUpdate(
    id,
    {},
    {
      new: true,
    }
  );

  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const result = await FreelanceApplication.findByIdAndDelete(id);

  return NextResponse.json(result);
}
