const fs = require("fs");
var shape = [
  { name: "Circle", diameter: 8 },
  { name: "square", length: 10 },
  { name: "triangle", height: 6, base: 8 },
];
fs.writeFile("myFolder1/shapes.txt", JSON.stringify(shape), (err) => {
  if (err) throw err;
  else
    fs.readFile("myFolder1/shapes.txt", "UTF-8", (err, data) => {
      if (err) throw err;
      else {
        data = JSON.parse(data);
        var circle = data[0].diameter * 3.14;
        var square = 4 * data[1].length;
        var triangle = data[2].height * data[2].base * 0.5;
      }
      fs.appendFile(
        "myFolder1/shapes.txt",
        "\ncircle = " +
          circle +
          ",\nsquare = " +
          square +
          ",\ntriangle = " +
          triangle +
          " .",
        (err) => {
          if (err) throw err;
        },
      );
    });
});
