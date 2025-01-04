import mongoose from "mongoose";

const CreativitySchema = new mongoose.Schema(
  {
    tag: { type: String },
    title: { type: String },
    description: { type: String },
    image: { type: String },
  },
  { collection: "creativity" } // Use the exact collection name
);

export default mongoose.models.Creativity ||
  mongoose.model("Creativity", CreativitySchema);
