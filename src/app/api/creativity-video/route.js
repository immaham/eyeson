import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mangodb";
import Creativity from "../../models/Creativity";

export async function GET() {
  try {
    await connectToDatabase();

    const CMotion = await Creativity.find({ type: "video" });
    return NextResponse.json(CMotion, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cards", details: error.message },
      { status: 500 }
    );
  }
}
