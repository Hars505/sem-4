const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.set("content-type","text/html")
  res.send('<h1>Hello World!!<h1>')
})
app.listen(3000,"localhost",100, () => {
  console.log("Server Running")
})
