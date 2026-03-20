const fs = require("fs");
fs.writeFile("myFolder1/sort.txt","Hello! World!!",(err) =>{if (err) throw err});
fs.rename("myFolder1/sort.txt","myFolder1/NONN.txt",(err) =>{if (err) throw err});
fs.appendFile("myFolder1/sort.txt","Hii! Nice to meet You .. ",(err) =>{if (err) throw err});
fs.copyFile("myFolder1/sort.txt","myFolder1/NONN.txt",(err) =>{if (err) throw err});
fs.mkdir("MyFolder2",(err) =>{if (err) throw err});
fs.readFile("myFolder1/sort.txt","UTF-8",(err, data) => { if (err) throw err; console.log(data);});