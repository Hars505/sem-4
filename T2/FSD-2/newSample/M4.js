const express = require("express");
const app = express();
var nm = require("nodemailer");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../views", { index: "index.html" }));
app.post("/process", (req, res) => {
  var email = req.body.email;
  var trans = nm.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "harshil0203007@gmail.com",
      pass: "oafn rnog uplz cbex",
    },
  });
  var mailoption = {
    Form: "harshil0203007@gmail.com",
    to: email,
    subject: "response Recived",
    text: "Hello",
    html: "<h1>Thank you For your Response</h1>",
  };
  trans.sendMail(mailoption, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      res.send("success");
    }
  });
});
app.listen(3001);
