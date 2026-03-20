const fs = require("fs");
var data = {d:{a:10,b:20,c:[30,40]}};
fs.writeFile("myFolder1/S2.txt", JSON.stringify(data), (err) => {
  if (err) throw err;
  else
    fs.readFile("myFolder1/S2.txt","UTF-8",(err,data)=> {
      if (err) throw err;
      else {
        data = JSON.parse(data);
        result="\na+b = "+(data.d.a+data.d.b)+"\n c[1] - b = "+(data.d.c[1]-data.d.b)+"\n c[0]+c[1] = "+(data.d.c[1]*data.d.c[0]);
        fs.appendFile("myFolder1/S2.txt",result,(err)=> {
      if (err) throw err;})
      }
  })});