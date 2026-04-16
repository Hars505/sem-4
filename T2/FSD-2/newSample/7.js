const express = require("express");
const app = express();
app.use(express.static("../frontend"));
app.use(express.static("../CSS"));
app.use(express.static("../PNG"));
app.listen(3001, "localhost", () => {
  console.log("Server Running");
});
// when js file is in Frontend Folder
