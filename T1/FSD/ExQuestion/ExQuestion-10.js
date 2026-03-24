var pm = require("path");
var dir = pm.dirname("C:\\STUDY\\sem-4\\T1\\FSD\\ExQuestion-1.html");
var fs = require("fs");
var newdir = fs.mkdir("New_Folder",(err)=>{if(err) throw err;});
var filename = pm.extname("C:\\STUDY\\sem-4\\T1\\FSD\\ExQuestion-1.html");
var filepath = dir+"\\"+"ExQuestion-1.html"
var newFile = fs.writeFile("New_Folder\\ExQuestion-1.html" ,"Hello",
  (err) => {
    if (err) throw err;
  },
);
fs.copyFile("ExQuestion-1.html",
    "New_Folder\\ExQuestion-1.html",
        
        (err) => {
          if (err) throw err;
          else
            fs.unlink("C:\\STUDY\\sem-4\\T1\\FSD\\ExQuestion-1.html", (err) => {
              if (err) throw err;
            });
        },
      );
