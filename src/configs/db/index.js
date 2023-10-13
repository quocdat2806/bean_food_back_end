const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://dath33603:QWCNouzimMLmQESf@cluster0.xcezadi.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect successfully");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect };
