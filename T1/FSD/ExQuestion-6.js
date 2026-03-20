const fs = require("fs");
fs.writeFile("myFolder1/sort.txt", "Hello! World!!", (err) => {
  if (err) throw err;
  else
    fs.appendFile("myFolder1/sort.txt", "Hii! Nice to meet You .. ", (err) => {
      if (err) throw err;
      else
        setTimeout(
          () =>
            fs.readFile("myFolder1/sort.txt", "UTF-8", (err, data) => {
              if (err) throw err;
              else console.log(data);
            }),
          3000,
        );
    });
});
