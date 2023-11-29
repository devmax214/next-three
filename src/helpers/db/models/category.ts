import mongoose from "mongoose";
import { ICategoryItem } from "@/@types/product";

const CategorySchema = new mongoose.Schema<{}>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    artworks: [
      {
        price: Number,
        name: String,
      },
    ],
    items: [
      {
        price: Number,
        item: String,
      },
    ],
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Category as mongoose.Model<ICategoryItem>) ||
  mongoose.model<ICategoryItem>("Category", CategorySchema);
