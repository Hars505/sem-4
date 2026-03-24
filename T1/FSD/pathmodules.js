var pm = require("path");
path = pm.dirname("C:\\STUDY\\sem-4\\T1\\FSD\\ExQuestion-1.html");
console.log(path);
b = pm.basename("C:\\STUDY\\sem-4\\T1\\FSD\\data.txt");
console.log(b);
ext = pm.extname("C:\\STUDY\\sem-4\\T1\\FSD\\data.txt");
console.log(ext);
p = pm.parse("C:\\STUDY\\sem-4\\T1\\FSD\\ExQuestion-1.html");
if (b.ext == ".txt") {
  console.log("text");
} else {
  console.log("Not a text Doc.");
}
