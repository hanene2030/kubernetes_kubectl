//copied from https://expressjs.com/en/starter/hello-world.html
//Tuto followed https://www.youtube.com/watch?v=d6WC5n9G_sM&t=2s

const express = require('express')
const app = express()
const os = require('os')
const port = 3000

app.get('/', (req, res) => {
  const response_msg = `Version 2: Hello from ${os.hostname}`
  console.log(response_msg)
  res.send(response_msg)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
