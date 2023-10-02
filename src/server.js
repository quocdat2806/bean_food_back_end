const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const db = require("./config/db");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    // partialsDir: __dirname + "/resources/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));
// db.connect();
app.listen(port, () => console.log(`listen at ${port}`));
