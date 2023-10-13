const mongoose = require("mongoose");

const { Schema, Types } = mongoose;
const discountSchema = new Schema(
  {
    discountPercent: Number,
    product: { type: Schema.Types.ObjectId, ref: "Product" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Discount", discountSchema);
