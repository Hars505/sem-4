const express = require("express");
const app = express();
app.use(express.static(("./newSample")));
app.listen(3001, "localhost", 100, () => {
  console.log("Server Running");
});
// when js file is not in Frontend Folder