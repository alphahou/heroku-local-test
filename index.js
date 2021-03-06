const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
	
express()
  .use('/public',express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/index.html')))
  .get('/draw-algorithm',(req, res) => res.sendFile(path.join(__dirname, 'src/drawAlgorithm.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
