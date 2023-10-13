const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
mongoose.set("strictQuery", false);

const userSchema = new Schema(
  {
    name: String,
    email: String, // String is shorthand for {type: String}
    phone: String,
    avatar: String,
    password: String,
    name: String,
    role: String,
    birthday: String,
    gender: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
