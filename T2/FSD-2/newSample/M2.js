const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use("/contact", (req, res) => {
  res.render("contact");
});
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const marks = req.body.marks;
  res.render("result", { marks: marks });
});
app.listen(3001);
