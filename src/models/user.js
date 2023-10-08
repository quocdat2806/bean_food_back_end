import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, default: "" }, // String is shorthand for {type: String}
    phone: { type: String, default: "" },
    avatar: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
