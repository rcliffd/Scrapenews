const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = 777;
const app = express();
const exphbs = require("express-handlebars");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
module.exports = app;
