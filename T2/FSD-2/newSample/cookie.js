var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.static("../"));
app.use(express.urlencoded());
app.post("/next", (req, res, next) => {
  res.cookie("fname", req.body.fname);
  res.cookie("pass", req.body.password);
  res.redirect("/admin");
});
