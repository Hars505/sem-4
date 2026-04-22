var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../CSS"));
app.use(express.static("../frontend", { index: "2.html" }));

app.get("/", (req, res) => {
  const html = `<form method="POST" action="/next">
    <input type="text" name="fname" placeholder="First Name" required>
    <input type="password" name="pass" placeholder="Password" required>
    <button type="submit">Next</button>
  </form>`;
  res.send(html);
});

app.post("/next", (req, res) => {
  const html = `<form method="POST" action="/admin">
    <button type="submit">Submit</button>
    <a href="/">Logout</a>
  </form>`;
  res.send(html);
});

app.post("/admin", (req, res) => {
  res.send(req.cookies);
});

app.listen(3002, "localhost", () => {
  console.log("Server Running");
});
