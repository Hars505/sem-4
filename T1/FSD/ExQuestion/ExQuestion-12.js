const em = require("events");
const ee = new em();
var radius = 5;
ee.on("isPostive", (x) => {
  if (x < 0) {
    console.log("radius Should be postive");
  } else
    ee.on("perimeter", (x) => {
      console.log(3.14 * 2 * x);
    });
});
ee.emit("isPostive", radius);
ee.emit("perimeter", radius);
