var express = require('express')
var app = express()
var snmp = require('snmp-native')
var host = '10.41.160.1'
var community = 'public'
var session = new snmp.Session({ host: host, community: community })
var oid = [1, 3, 6, 1, 2, 1, 1, 1, 0]
session.get({ oid: oid }, function (err, varbinds) {
  if (err) {
    console.log(err)
  } else {
    this.vb = varbinds[0]
    console.log('The system description is "' + this.vb.value + '"')
  }
  session.close()
})
app.listen(3000, function () {
  console.log('Example app listening on port 7001!')
})
