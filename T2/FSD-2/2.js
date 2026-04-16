const express = require("express");
const app = express();
const Student = { name: "LJU", age: 28 };
app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.send("<h1>Hello World!!<h1>");
});
app.get("/About", (req, res) => {
  res.set("content-type", "text/plain");
  res.send(Student);
});
app.listen(3005, "localhost", 100, () => {
  console.log("Server Running");
});
