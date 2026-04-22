const express = require("express");
const router = express.Router();
const data = [
  { id: 101, name: "ABC", Branch: "CSE", city: "Abad" },
  { id: 102, name: "DEF", Branch: "AIML", city: "SURAT" },
  { id: 103, name: "GHI", Branch: "CSE", city: "Abad" },
  { id: 104, name: "JKL", Branch: "CSEAI", city: "RAT" },
  { id: 105, name: "MNO", Branch: "AIML", city: "KUT" },
];
router.get("/", (req, res) => {
  res.set("content-type", "application/json");
  res.send(data);
});
router.get("/:id", (req, res) => {
  var current = data.filter((a) => a.id == parseInt(req.params.id));
  if (current.length > 0) {
    res.send(current);
  } else {
    res.send("Not Found");
  }
});
router.get("/branch/:branch", (req, res) => {
  var current = data.filter((a) => a.Branch === req.params.branch);
  if (current.length > 0) {
    res.send(current);
  } else {
    res.send("Not Found");
  }
});
router.get("/city/:city", (req, res) => {
  var current3 = data.filter((a) => a.city === req.params.city);
  if (current3.length > 0) {
    res.send(current3);
  } else {
    res.send("Not Found");
  }
});
module.exports = router;
