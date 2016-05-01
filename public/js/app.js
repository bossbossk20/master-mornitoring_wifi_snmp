/*global angular */
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    app.showLoad = false
    app.showCard = true
    app.test = 'koy'
    app.scan = function () {
      console.log('scan')
      app.showLoad = true
      setTimeout(function () {
        document.getElementById('button').click()
        hideCard()
      }, 3000)
    }
    var hideCard = function () {
      app.showCard = false
    }
    
  })
