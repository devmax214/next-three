import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { ICustomerItem } from "@/@types/customer";

const CustomerSchema = new mongoose.Schema<{}>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minLength: [6, "Your password must be at least 6 characters long"],
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postal: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      default: "man",
    },
    birthday: {
      type: String,
    },
    accept: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      required: true,
      default: "active",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordTokenExpiry: {
      type: Date,
    },
    verifyToken: {
      type: String,
    },
    verifyTokenExpiry: {
      type: Date,
    }
  },
  { timestamps: true }
);

CustomerSchema.pre("save", function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    // @ts-ignore
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  } catch (err: any) {
    return next(err);
  }
});

CustomerSchema.methods.comparePassword = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default (mongoose.models.Customer as mongoose.Model<ICustomerItem>) ||
  mongoose.model<ICustomerItem>("Customer", CustomerSchema);
