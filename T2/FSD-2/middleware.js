const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Hello! From MiddleWare 1.");
  next();
  // return res.json({msg:"Hello! From MiddleWare 1."});
});
app.use((req, res, next) => {
  console.log("Hello! From MiddleWare 2.");
  next();
  // return res.json("Hello! From MiddleWare 2.");
});
app.get("/users", (req, res) => {
  const html = `
    <ul>
    <li>HIKE</li>
    <li>MIKE</li>
    <li>SPIKE</li>
    </ul>`;
  res.send(html);
});
app.listen(3000, 100, () => {
  console.log("Server Running on port 3000");
});
