const express = require("express");
const app = express();
const api = require("./rest");
app.use("/api", api);
app.listen(3000, () => {
  console.log("Server Running");
});
