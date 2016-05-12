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
            $( "#system" ).removeClass( "active" )
            $( "#uptime" ).removeClass( "active" )
            $( "#vlan" ).removeClass( "active" )
            $( "#bandwidth" ).removeClass( "active" )
            $( "#wifi" ).addClass( "active" )
            $( ".wifi" ).show()
            $( ".system").hide()
            $( ".uptime" ).hide()
            $( ".interface" ).hide()
            $( ".speed" ).hide()
      app.timee = function (timee) {
        return humanizeDuration(timee)
      }
      app.wifi = function () {
          $( "#system" ).removeClass( "active" )
          $( "#uptime" ).removeClass( "active" )
          $( "#vlan" ).removeClass( "active" )
          $( "#bandwidth" ).removeClass( "active" )
          $( "#wifi" ).addClass( "active" )
          $( ".wifi" ).show()
          $( ".system").hide()
          $( ".uptime" ).hide()
          $( ".interface" ).hide()
          $( ".speed" ).hide()
      }
      app.system = function () {
          $( "#system" ).addClass( "active" )
          $( "#wifi" ).removeClass( "active" )
          $( "#uptime" ).removeClass( "active" )
          $( "#vlan" ).removeClass( "active" )
          $( "#bandwidth" ).removeClass( "active" )
          $( ".wifi" ).hide()
          $( ".system" ).show()
          $( ".uptime" ).hide()
          $( ".interface" ).hide()
          $( ".speed" ).hide()

      }
      app.time = function () {
        $( "#uptime" ).addClass( "active" )
        $( "#system" ).removeClass( "active" )
        $( "#wifi" ).removeClass( "active" )
        $( "#bandwidth" ).removeClass( "active" )
        $( "#vlan" ).removeClass( "active" )
        $( ".wifi" ).hide()
        $( ".system" ).hide()
        $( ".uptime" ).show()
        $( ".interface" ).hide()
        $( ".speed" ).hide()
      }
      app.vlan = function () {
         $( "#vlan" ).addClass( "active" )
         $( "#uptime" ).removeClass( "active" )
         $( "#system" ).removeClass( "active" )
         $( "#wifi" ).removeClass( "active" )
         $( "#bandwidth" ).removeClass( "active" )
         $( ".wifi" ).hide()
         $( ".system" ).hide()
         $( ".uptime" ).hide()
         $( ".interface" ).show()
         $( ".speed" ).hide()
      }
      app.bandwidth = function () {
        $( "#bandwidth" ).addClass( "active" )
        $( "#wifi" ).removeClass( "active" )
        $( "#system" ).removeClass( "active" )
        $( "#vlan" ).removeClass( "active" )
        $( "#uptime" ).removeClass( "active" )
        $( ".wifi" ).hide()
        $( ".system" ).hide()
        $( ".uptime" ).hide()
        $( ".interface" ).hide()
        $( ".speed" ).show()
      }
  });
