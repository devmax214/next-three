import mongoose from "mongoose";
import { IProductItem } from "@/@types/product";

const ProductSchema = new mongoose.Schema<{}>(
  {
    name: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    others: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
      default: [],
    },
    sizes: {
      type: [mongoose.Schema.ObjectId],
      ref: "Size",
      required: true,
      default: [],
    },
    color: {
      type: mongoose.Schema.ObjectId,
      ref: "Color",
      required: true,
      default: [],
    },
    material: {
      type: mongoose.Schema.ObjectId,
      ref: "Material",
      required: true,
      default: [],
    },
    code: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    publish: {
      type: String,
      required: true,
      default: "published",
    },
    gender: {
      type: [String],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Product as mongoose.Model<IProductItem>) ||
  mongoose.model<IProductItem>("Product", ProductSchema);
