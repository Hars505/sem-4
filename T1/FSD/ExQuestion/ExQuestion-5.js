const fs = require("fs");
fs.writeFileSync("myFolder1/sort.txt","c d g u e r ; n");
var data2 = fs.readFileSync("myFolder1/sort.txt",'utf-8');
var data = data2.split(" ");
data = data.sort((a,b) => a-b);
console.log(data)