const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.send("<h1>Hello World!!<h1>");
});
app.get("/About", (req, res) => {
  res.set("content-type", "text/plain");
  res.send("<h1>Hello World</h1>");
});
app.listen(3001, "localhost", 100, () => {
  console.log("Server Running");
});
