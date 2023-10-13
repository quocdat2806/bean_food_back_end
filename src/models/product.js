const mongoose = require("mongoose");

const { Schema, Types } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    countInStock: Number, // String is shorthand for {type: String}
    image: [],
    body: String,
    description: String,
    price: Number,
    category: String,
    star: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
