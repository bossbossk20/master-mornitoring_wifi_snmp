;(function () {
  'use strict'
  var express = require('express')
  var speedTest = require('speedtest-net')
  var router = express.Router()
  var snmp = require('snmp-native')
  var moment = require('moment')
  var host = '10.41.160.1'
  var community = 'public'
  const scanner = require('node-wifi-scanner')
  function timestamp(time){
      return (time/360000 |0)
  }
  router.get('/detail', function (req, res, next) {
    var session = new snmp.Session({ host: host, community: community })
    var oid = [1, 3, 6, 1, 2, 1, 1, 1, 0]
    session.get({ oid: oid }, function (err, varbinds) {
      if (err) {
        console.log(err)
      } else {
        this.vb = varbinds[0]
        res.send(this.vb.value)
        console.log('The system description is "' + this.vb.value + '"')
      }
      session.close()
    })
  })
  router.get('/interface', function (req, res, next) {
    var value = []
    var session = new snmp.Session({ host: host, community: community })
    session.getSubtree({ oid: '.1.3.6.1.2.1.2.2.1.2' }, function (error, varbinds) {
      if (error) {
        console.log('Fail :(')
      } else {
        varbinds.forEach(function (vb) {
          var ss = vb.value
          // console.log(ss.substr(0, 1))
          if (ss.substr(0, 1)=='V') {
              value.push({'vlan':vb.value})
          }else if(ss.substr(0, 1)=='G'){
              value.push({'interface':vb.value})
          }
        })
        res.send(value)
      }
    })
  })
  router.get('/uptime', function (req, res, next) {
    var session = new snmp.Session({ host: host, community: community })
    session.get({ oid: '.1.3.6.1.2.1.1.3.0' }, function (err, varbinds) {
      if (err) {
        console.log(err)
      } else {
        this.vb = varbinds[0]
        this.v = timestamp(this.vb.value)
        console.log(this.v)
        res.send(this.vb)
      }
      session.close()
    })
  })
  router.get('/speed', function (req, res, next) {
    var test = speedTest({maxTime: 8000})
    test.on('data', function (data) {
      console.log(data)
      res.send(data)
    })
    test.on('error', function (err) {
      console.error(err)
    })
  })
  router.get('/wifi', function (req, res, next) {
    scanner.scan((err, networks) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(networks)
      res.send(networks)
    })
  })
  router.get('/mac', function (req, res, next) {
    scanner.scan((err, networks) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(networks)
      res.send(networks)
    })
  })
  module.exports = router
})()
