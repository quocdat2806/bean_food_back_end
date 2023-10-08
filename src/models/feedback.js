import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const feedbackSchema = new Schema(
  {
    title: String,
    product: { type: Schema.Types.ObjectId, ref: "Product" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
