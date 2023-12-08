import mongoose from "mongoose";
import { IRateItem } from "@/@types/product";

const RateSchema = new mongoose.Schema<{}>(
  {
    productId: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default (mongoose.models.Rate as mongoose.Model<IRateItem>) ||
  mongoose.model<IRateItem>("Rate", RateSchema);
