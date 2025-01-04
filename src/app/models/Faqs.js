import mongoose from "mongoose";

const FaqsSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { collection: "faqs" } // Use the exact collection name
);

export default mongoose.models.faq || mongoose.model("faq", FaqsSchema);
