const fs = require("fs");
var data = [{"name":"Aman, Ram, Rahul"},{"age":["28,30,26"]},{"RollNo":["101,102,103"]}]
fs.writeFile("myFolder1/student.txt",JSON.stringify(data) ,(err) => {if (err) throw err;else fs.readFile("myFolder1/student.txt","UTF-8",(err,data)=>{if (err) throw err; else data = JSON.parse(data); console.log(data[0].name)})})