import mongoose from "mongoose";
import { IOrderProductItem } from "@/@types/order";

const OrderItemSchema = new mongoose.Schema<{}>(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    // size: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Size",
    //   required: true,
    // },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  { timestamps: true }
);

export default (mongoose.models
  .OrderItem as mongoose.Model<IOrderProductItem>) ||
  mongoose.model<IOrderProductItem>("OrderItem", OrderItemSchema);
