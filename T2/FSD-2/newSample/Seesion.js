var express = require("express");
var app = express();
var es = require("express-session");
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../CSS"));
app.use(express.static("../frontend", { index: "Session.html" }));
app.use(
  es({
    secret: "HAP",
    saveUninitialized: true,
    Cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  }),
);
app.get("/", (req, res) => {
  const html = `<form method="POST" action="/next">
    <input type="text" name="fname" placeholder="First Name" required>
    <input type="password" name="pass" placeholder="Password" required>
    <button type="submit">Next</button>
  </form>`;
  res.send(html);
});
app.get("/save", (req, res) => {
  req.session.name = req.query.fname;
  req.session.pasw = req.query.password;
  res.redirect("fetchData");
});
app.get("/fetchData", (req, res) => {
  if (req.session.name == "admin" && req.session.pasw == "admin@123") {
    res.send(`<h1>Welcome Admin </h1>
      <a href="/destroy">Logout</a> `);
  } else {
    res.send(
      "Wrong Username or Password" +
        "Enter Valid Credentials" +
        req.query.name +
        req.query.pasw,
    );
  }
});
app.get("/destroy", (req, res) => {
  req.session.destroy();
  const html = `<h1>Session destroyed</h1>
  <a href="/">Login</a>`;
  res.send(html);
});
app.listen(3002, "localhost", () => {
  console.log("Server Running");
});
