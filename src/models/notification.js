import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const notifySchema = new Schema(
  {
    title: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", notifySchema);
