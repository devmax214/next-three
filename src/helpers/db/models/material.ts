import mongoose from "mongoose";
import { IMaterialItem } from "@/@types/product";

const MaterialSchema = new mongoose.Schema<{}>(
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

export default (mongoose.models.Material as mongoose.Model<IMaterialItem>) ||
  mongoose.model<IMaterialItem>("Material", MaterialSchema);
