import mongoose from "mongoose";
import { IOrderItem } from "@/@types/order";

const OrderSchema = new mongoose.Schema<{}>(
  {
    email: {
      type: String,
      required: true,
    },
    items: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "OrderItem",
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    shipping: {
      type: Number,
      required: true,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
    coupon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coupon",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalQuality: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

export default (mongoose.models.Order as mongoose.Model<IOrderItem>) ||
  mongoose.model<IOrderItem>("Order", OrderSchema);
