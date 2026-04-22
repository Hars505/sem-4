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
app.post("/", (req, res, next) => {
  const html = `<form method="POST" action="/fetchData">
    <input type="text" name="fname" placeholder="First Name" required>
    <input type="Email" name="email" placeholder="E-mail" required>
    <input type="checkbox" name="subscribe">
    <button type="submit">Next</button>
  </form>`;
  res.send(html);
  next();
});
app.post("/fetchData", (req, res, next) => {
  req.session.name = req.body.fname;
  req.session.email = req.body.email;
  req.session.sub = req.body.subscribe;
  if (req.session.sub) {
    res.send(`<h1>Welcome ${req.session.name}</h1><br>
        <h1>Email is ${req.session.email}</h1><br>
        <h1>Thank You For subscribing </h1><br>
      <a href="/destroy">Logout</a> `);
    next("/");
  } else {
    res.send(
      `<h1>Welcome ${req.session.name}</h1><br>
        <h1>Email is ${req.session.email}</h1><br>
        <h1>You can subscribe now By Clicking Link Below For Daily Updates</h1>
        <a href="/destroy">subscribe</a> `,
    );
    next();
  }
});
app.post("/destroy", (req, res,next) => {
  req.session.destroy();
  const html = `<h1>Session destroyed</h1>
  <a href="/">Login</a>`;
  res.send(html);
});
app.listen(3002, () => {
  console.log("Server Running");
});
