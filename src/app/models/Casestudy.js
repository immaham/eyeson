import mongoose from "mongoose";

const CasestudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    projectInitiation: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    contentCreation: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    scope: {
      type: String,
      required: true,
    },
    tools: [
      {
        image: { type: String, required: true },
      },
    ],
    duration: {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
    },
    gallery: [
      {
        image: { type: String, required: true },
      },
    ],
    results: [
      {
        title: { type: String, required: true },
        description: [{ type: String, required: true }],
      },
    ],
  },
  { collection: "casestudy" }
);

// Export the model (prevent multiple compilations in Next.js)
export default mongoose.models.Casestudy ||
  mongoose.model("Casestudy", CasestudySchema);
