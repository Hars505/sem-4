const express = require("express");
const app = express();
const addName = (req, res, next) => {
  req.name = "Aarav";
  console.log("Name Added");
  next();
};
const addCollege = (req, res, next) => {
  req.college = "LJIET";
  console.log("College Added");
  next();
};
const addMarks = (req, res, next) => {
  req.marks = 22;
  console.log("Marks Added");
  next();
};
app.get("/", addName, addCollege, addMarks, (req, res) => {
  res.send(`name = ${req.name} college = ${req.college} marks =
req.marks}`);
});
app.listen(5050);
console.log(`Server started at http:/localhost:${5050}`);
