var express = require('express')
var app = express()
var get = require('./models/route/snmp.js')
app.use(express.static('public'))
app.use('/', get)
app.listen(3000, function () {
  console.log('Example app listening on port 3000')
})
