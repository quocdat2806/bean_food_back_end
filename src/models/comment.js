import mongoose from "mongoose";
const { Schema, Types } = mongoose;
const commentSchema = new Schema(
  {
    title: String,
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
