import mongoose from "mongoose";
import { ICouponItem } from "@/@types/coupon";

const CouponSchema = new mongoose.Schema<{}>(
  {
    code: { type: String, require: true, unique: true },
    isPercent: { type: Boolean, require: true, default: true },
    amount: { type: Number, required: true },
    expireDate: { type: String, require: true, default: "" },
    isActive: { type: Boolean, require: true, default: true },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    state: { type: String, require: true },
  },
  { timestamps: true }
);

CouponSchema.pre("save", function (next) {
  // let currentDate = new Date();
  // this.updated_at = currentDate;
  // if (!this.created_at) {
  //   this.created_at = currentDate;
  // }
  // next();
});

export default (mongoose.models.Coupon as mongoose.Model<ICouponItem>) ||
  mongoose.model<ICouponItem>("Coupon", CouponSchema);
