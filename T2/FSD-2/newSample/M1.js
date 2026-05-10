const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use("/", (req, res) => {
  res.render("first", { name: "Rahul" });
});
app.listen(3001);
