const em = require("events");
const ee = new em();
ee.on("Connection", () => {
  console.log("Connection successful");
  ee.on("trigger", () => {
    console.log("data recived");
  });
  ee.emit("trigger");
});
ee.emit("Connection");
