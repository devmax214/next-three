import mongoose from "mongoose";
import { IColorItem } from "@/@types/product";

const ColorSchema = new mongoose.Schema<{}>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Color as mongoose.Model<IColorItem>) ||
  mongoose.model<IColorItem>("Color", ColorSchema);
