import mongoose from "mongoose";
import { IAddressItem } from "@/@types/customer";

const AddressSchema = new mongoose.Schema<{}>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postal: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
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

export default (mongoose.models.Address as mongoose.Model<IAddressItem>) ||
  mongoose.model<IAddressItem>("Address", AddressSchema);
