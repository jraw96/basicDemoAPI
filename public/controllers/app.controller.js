// /public/app.js

// Declare the angular ap. 
var ccpDemo = angular.module('ctrl', [])

    // Inject the desired angularJS services, such as 
    ccpDemo.controller('myController', ['$scope','$http', '$location', '$window', function($scope, $http, $location, $window) {


       // Scope variables
       $scope.myDatabase = []
       $scope.addItemText = ""
       $scope.deleteItemText =  ""

      // Functions:

      // Get Items API call
      $scope.getItems = function(){

        $http.get('/api/getItems').then(function successCallback(response) {
          
          console.log(JSON.stringify(response))

          $scope.myDatabase = response.data
  
        }, function errorCallback(response) {
          console.log(response)
        })
      }

      // Insert Item API call
      $scope.insertItem = function(){

        var postObj = {}
        postObj.item = $scope.addItemText
        postObj.test = "test"


        $http.post('/api/insertItem', postObj).then(function successCallback(response) {
          
          console.log(JSON.stringify(response))

          $scope.myDatabase = response.data.myItems
  
        }, function errorCallback(response) {
          console.log(response)
        })
      }

      // Delete Item API call
      $scope.deleteItem = function(){
        
        var postObj = {}
        postObj.item = $scope.deleteItemText
        
        $http.put('/api/deleteItem', postObj).then(function successCallback(response) {
                                  
          console.log(JSON.stringify(response))

        $scope.myDatabase = response.data.myItems
          
        }, function errorCallback(response) {
            console.log(response)
        })
      }

}]);