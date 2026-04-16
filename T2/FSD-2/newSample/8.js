const express = require("express");
const app = express();
app.use(express.static("../frontend"));
app.use(express.static("../CSS"));
app.use(express.static("../PNG"));
app.get("/process.get", (req, res) => {
  var name = req.query.name;
  var email = req.query.email;
  res.write(name + " " + email);
  var newn = req.query.split("h");
  for (i in newn) {
    res.write(i + "<br/>");
    console.log(i)
  }
  res.send();
});
app.listen(3001, "localhost", () => {
  console.log("Server Running");
});
