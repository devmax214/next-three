import mongoose, { Schema, Model, Document } from "mongoose";

interface ICustomizeItem extends Document {
  name: string;
  code: string;
  price: number;
  customer: Schema.Types.ObjectId;
  category?: Schema.Types.ObjectId;
  publish: string;
  images: string[];
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
    images: {
      type: [String],
      required: true,
      default: [],

    },
    publish: {
      type: String,
      default: "published",
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Customize as mongoose.Model<ICustomizeItem>) ||
  mongoose.model<ICustomizeItem>("Customize", CustomizeSchema);
