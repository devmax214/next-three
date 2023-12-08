import mongoose, { Schema, Model, Document } from "mongoose";

interface ICustomizeItem extends Document {
  name: string;
  code: string;
  price: number;
  customer: Schema.Types.ObjectId;
  category?: Schema.Types.ObjectId;
  product: string;
  publish: string;
  images: string[];
  color: string;
  quoteState: number;
}

const CustomizeSchema: Schema<ICustomizeItem> = new Schema<ICustomizeItem>(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    product: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      required: true,
      default: [],

    },
    publish: {
      type: String,
      default: "published",
    },
    color: {
      type: String,
      default: "",
    },
    quoteState: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Customize as mongoose.Model<ICustomizeItem>) ||
  mongoose.model<ICustomizeItem>("Customize", CustomizeSchema);
