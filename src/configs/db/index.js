const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://DatHa:WaWkrdWWDNRPvXkH@commercebacked.bbxfzfo.mongodb.net/",
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
