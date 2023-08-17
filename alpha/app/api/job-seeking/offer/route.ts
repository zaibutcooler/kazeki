import Model from "@/database/JobOffer";
import connectDB from "@/utils/connectDB";
import User from "@/database/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const {
      user,
      title,
      description,
      company,
      requirements,
      responsibilities,
      onSite,
      location,
      salary,
      allowance,
      deadline,
      contact,
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
      description,
      company,
      requirements,
      responsibilities,
      onSite,
      location,
      salary,
      allowance,
      deadline,
      contact,
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

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const userID = searchParams.get("userID");
    const option = searchParams.get("option");
    const search = searchParams.get("search");

    if (search) {
      const searchResults = await Model.find({
        title: { $regex: search, $options: "i" },
      });
      return new Response(JSON.stringify(searchResults), {
        status: 200,
      });
    }

    if (id) {
      const item = await Model.findOne({ _id: id });
      return new Response(JSON.stringify(item), {
        status: 200,
      });
    }
    if (userID) {
      const items = await Model.find({ user: userID });
      return new Response(JSON.stringify(items), {
        status: 200,
      });
    }

    //still need to develop a lot
    if (option && option == "main") {
      const items = await Model.find();
      return new Response(JSON.stringify(items), {
        status: 200,
      });
    }
    //need some algorithms to keep moving
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function PATCH(req: Request) {
  try {
    await connectDB();
    const {
      title,
      description,
      company,
      requirements,
      responsibilities,
      onSite,
      location,
      salary,
      allowance,
      deadline,
      contact,
    } = await req.json();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const userID = searchParams.get("userID");

    const itemExists = await Model.findById(id);
    if (itemExists) {
      if (itemExists.user !== userID) {
        return new Response(
          JSON.stringify({ message: "It's not the user of this item" }),
          {
            status: 400,
          }
        );
      }
    }

    const updatedItem = await Model.findByIdAndUpdate(
      id,
      {
        title,
        description,
        company,
        requirements,
        responsibilities,
        onSite,
        location,
        salary,
        allowance,
        deadline,
        contact,
        updated: Date.now,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updatedItem), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const userID = searchParams.get("userID");

    const itemExists = await Model.findById(id);
    if (itemExists) {
      if (itemExists.user !== userID) {
        return new Response(
          JSON.stringify({ message: "It's not the user of this item" }),
          {
            status: 400,
          }
        );
      }
    }

    const deletedItem = await Model.findByIdAndDelete(id);
    return new Response(JSON.stringify(deletedItem), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
