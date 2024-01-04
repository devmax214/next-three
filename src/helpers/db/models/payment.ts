import mongoose from "mongoose";
import { IPaymentItem } from "@/@types/customer";

const PaymentSchema = new mongoose.Schema<{}>(
  {
    type: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    number: {
      type: String,
      unique: true,
      sparse: true,
    },
    month: {
      type: String,
    },
    year: {
      type: String,
    },
    holder: {
      type: String,
    },
    security: {
      type: String,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  },
  { timestamps: true }
);

export default (mongoose.models.Payment as mongoose.Model<IPaymentItem>) ||
  mongoose.model<IPaymentItem>("Payment", PaymentSchema);
