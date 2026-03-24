const fs = require("fs");
var file1 = fs.writeFileSync("myFolder1/destination.txt","");
var data1 = fs.copyFileSync(
  "myFolder1/source.txt",
  "myFolder1/destination.txt",
);
var data = fs.readFileSync("myFolder1/destination.txt",'utf-8')
console.log(data);