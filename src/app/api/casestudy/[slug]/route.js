import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mangodb";
import Casestudy from "../../../models/Casestudy";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { slug } = await params;
    const casestudy = await Casestudy.findOne({ slug });
    return NextResponse.json(casestudy, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cards", details: error.message },
      { status: 500 }
    );
  }
}
