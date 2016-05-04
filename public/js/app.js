angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this
    $http.get('/wifi'). success(function(response) {
      app.wifis  = response
        }).error(function(data, status, headers, config) {
            console.log('error')
       })
       $http.get('/detail'). success(function(response) {
         app.detail  = response
           }).error(function(data, status, headers, config) {
               console.log('error')
          })
        $http.get('/uptime'). success(function(response) {
          app.uptime  = response.value
            }).error(function(data, status, headers, config) {
                  console.log('error')
           })
        $http.get('/interface'). success(function(response) {
          app.interfaces  = response
            }).error(function(data, status, headers, config) {
               console.log('error')
            })
        $http.get('/speed'). success(function(response) {
           app.speed  = response.speeds
           console.log(app.speed)
            }).error(function(data, status, headers, config) {
                console.log('error')
            })
      app.timee = function (timee) {
        return humanizeDuration(timee)
      }
      app.wifi = function () {
         $( "#wifi" ).removeClass( "active" )
          $( "#wifi" ).addClass( "active" )
      }
      app.system = function () {
          $( "#system" ).removeClass( "active" )
          $( "#system" ).addClass( "active" )
      }
  });
