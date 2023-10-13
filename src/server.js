const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;
const db = require("./configs/db/index.js");
const router = require("./routes/index.js");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("combined"));
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    partialsDir: __dirname + "/resources/views/partials",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resources/views"));
db.connect();
router(app);
app.listen(port, () => console.log(`listen at ${port}`));
