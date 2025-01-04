// app/api/portfolio-home-card/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mangodb";
import PortfolioHomeCard from "../../models/PortfolioHomeCard";

export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch data from the portfolioHomeCards collection
    const cards = await PortfolioHomeCard.find({});
    return NextResponse.json(cards, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch cards", details: error.message },
      { status: 500 }
    );
  }
}
