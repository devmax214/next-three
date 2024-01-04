import mongoose, { Schema, Model, Document } from "mongoose";

interface ICustomizeItem extends Document {
  customer: Schema.Types.ObjectId;
  product: string;
  name: string;
  context: object;
  publish: string;
  quoteState: number;
}

const CustomizeSchema: Schema<ICustomizeItem> = new Schema<ICustomizeItem>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    product: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    context: {
      type: Object,
      required: true
    },
    publish: {
      type: String,
      default: "published",
    },
    quoteState: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Customize as mongoose.Model<ICustomizeItem>) ||
  mongoose.model<ICustomizeItem>("Customize", CustomizeSchema);
