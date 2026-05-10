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
  const T1 = parseInt(req.body.T1);
  const T2 = parseInt(req.body.T2);
  const T3 = parseInt(req.body.T3);
  const T4 = parseInt(req.body.T4);
  const total = T1 + T2 + T3 + T4;
  res.render("result", { total: total });
});
app.listen(3001);
