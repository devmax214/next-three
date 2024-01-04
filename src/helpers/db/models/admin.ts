import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema<{}>(
  {
    email: {},
    password: {},
  },
  { timestamps: true }
);
