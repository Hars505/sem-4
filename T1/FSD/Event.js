const em = require("events");
const ee = new em();
ee.on("start",()=>{console.log("started");});
ee.emit("start")