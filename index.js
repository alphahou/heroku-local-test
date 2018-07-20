const express = require('express')
const path = require('path')
const PORT = 8080

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
