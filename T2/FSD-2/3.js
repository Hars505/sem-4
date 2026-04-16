const express = require("express");
const app = express();
const Student = {
  U1: [
    { name: "LJU", age: 20 },
    { name: "DHRU", age: 20 },
    { name: "JIYA", age: 21 },
    { name: "ZD", age: 20 },
    { name: "HAR", age: 19 },
  ],
};
app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.write("<table border=1><tr><td>Name</td><td>ID</td></tr>");
  for (i of Student.U1) {
    res.write("</br><tr><td>" + i.name + "</td><td>" + i.age + "</td></tr>");
  }
  res.write("</table>");
  res.send();
});

app.listen(3010, "localhost", 100, () => {
  console.log("Server Running");
});
