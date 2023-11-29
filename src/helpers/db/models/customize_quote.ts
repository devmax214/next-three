import mongoose from "mongoose";
import { ICustomizeQuoteItem } from "@/@types/customize";

const CustomizeQuoteSchema = new mongoose.Schema<{}>(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    garment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models
  .CustomizeQuoteItem as mongoose.Model<ICustomizeQuoteItem>) ||
  mongoose.model<ICustomizeQuoteItem>(
    "CustomizeQuoteItem",
    CustomizeQuoteSchema
  );
