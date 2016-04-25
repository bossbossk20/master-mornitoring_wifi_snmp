;(function () {
  'use strict'
  var express = require('express')
  var speedTest = require('speedtest-net')
  var router = express.Router()
  var snmp = require('snmp-native')
  var host = '10.41.160.1'
  var community = 'public'

  router.get('/detail', function (req, res, next) {
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
  })

  router.get('/interface', function (req, res, next) {
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
  })

  router.get('/speed', function (req, res, next) {
    var test = speedTest({maxTime: 5000})
    test.on('data', function (data) {
      console.dir(data)
      res.send(test)
    })
    test.on('error', function (err) {
      console.error(err)
    })
  })

  module.exports = router
})()
