import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema<{}>(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  { timestamps: true }
);
