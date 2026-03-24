const em = require("events");
const ee = new em();
const fs = require("fs");
ee.on("writefile", () => {
  fs.writeFile(
    "C:\\STUDY\\sem-4\\T1\\FSD\\myFolder1\\S3.txt",
    "Hello World",
    (err) => {
      if (err) throw err;
    });
  ee.on("append", () => {
    fs.appendFile(
      "C:\\STUDY\\sem-4\\T1\\FSD\\myFolder1\\S3.txt",
      "Again new World",
      (err) => {
        if (err) throw err;
      },
    );
    ee.on(
      "read",()=>{
      fs.readFile(
        "C:\\STUDY\\sem-4\\T1\\FSD\\myFolder1\\S3.txt","UTF-8",
        (err, data) => {
          if (err) throw err;
          else console.log(data);
        },
      )},
    );ee.emit("read");
  });ee.emit("append");
});
ee.emit("writefile");



