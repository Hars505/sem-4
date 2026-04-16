const express = require("express");
const app = express();
const entrylog = (req, res, next) => {
  console.log("Welcome to College");
  next();
};
const CheckID = (req, res, next) => {
  const hasID = true;
  if (hasID) {
    console.log("verfied");
    next();
  } else {
    res.send("Access Denied");
  }
};
app.get("/class", entrylog, CheckID, (req, res) => {
  res.send("Welcome");
});
app.listen(3020, () => {
  console.log("Server Running");
});
