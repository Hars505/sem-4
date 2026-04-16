const express = require("express");
const app = express();
app.use(express.static("../frontend", { index: "1.html" }));
app.use(express.static("../CSS"));
app.use(express.static("../PNG"));
app.get("/calc", (req, res) => {
  const { number1, number2, formula } = req.query;
  console.log(req.query);

  if (!number1 || !number2) {
    return res.status(400).send("Please enter both numbers");
  }

  const n1 = Number(number1);
  const n2 = Number(number2);

  let result;
  switch (formula) {
    case "add":
      result = n1 + n2;
      break;
    case "sub":
      result = n1 - n2;
      break;
    case "mul":
      result = n1 * n2;
      break;
    case "div":
      result = n2 === 0 ? "Cannot divide by zero" : n1 / n2;
      break;
    default:
      return res.status(400).send("Invalid formula 2");
  }

  res.send({ result });
});
app.listen(3010, "localhost", () => {
  console.log("Server Running");
});
// when js file is in Frontend Folder
