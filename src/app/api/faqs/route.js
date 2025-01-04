import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mangodb";
import Faqs from "../../models/Faqs";

export async function GET() {
  try {
    await connectToDatabase();

    // Fetch data from the portfolioHomeCards collection
    const faqs = await Faqs.find({});
    return NextResponse.json(faqs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cards", details: error.message },
      { status: 500 }
    );
  }
}
