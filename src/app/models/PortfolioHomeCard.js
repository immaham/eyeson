import mongoose from "mongoose";

const PortfolioHomeCardSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { collection: "portfolioHomeCards" } // Use the exact collection name
);

export default mongoose.models.PortfolioHomeCard ||
  mongoose.model("PortfolioHomeCard", PortfolioHomeCardSchema);
