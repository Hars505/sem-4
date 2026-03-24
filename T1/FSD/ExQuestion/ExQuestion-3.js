const fs = require("fs");
var dir = fs.mkdirSync("myFolder1");
var file = fs.writeFileSync(
  "myFolder1/file1.txt",
  "Hello! How are You? Nice to Meet you!.",
);
fs.appendFileSync("myFolder1/file1.txt", " ABC TVF");
var data1 = fs.readFileSync("myFolder1/file1.txt", "utf-8");
console.log(data1);
fs.renameSync("myFolder1/file1.txt", "myFolder1/file2.txt");
