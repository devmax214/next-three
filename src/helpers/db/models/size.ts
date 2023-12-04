import mongoose from "mongoose";
import { ISizeItem } from "@/@types/product";

const SizeSchema = new mongoose.Schema<{}>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Size as mongoose.Model<ISizeItem>) ||
  mongoose.model<ISizeItem>("Size", SizeSchema);
