/*global angular,alert*/
angular.module('app', [])
  .controller('TodoListController', function () {
    var app = this
    app.showLoad = false
    app.test = 'koy'
    app.scan = function () {
      console.log('scan')
      app.showLoad = true
      setTimeout(function () {
        alert('Hello')
      }, 3000)
    }
  })
