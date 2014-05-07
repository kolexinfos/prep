/**
 * Created by JaneCockblocker on 18/04/14.
 */

    //definition for login controller
var loginController = function($scope,$objectStore){
  //scope variables to be injected into views
  //signupo functions

  $scope.showDialog = false;
  $scope.signup=function(){
    //emit signup request to directive
    $scope.$emit("signupClicked",$scope);
  }

  $scope.$watch($scope.showDialog,function(e){
    console.log("showdilog switch changed")
  });

  $scope.$on('closeLogin',function(){
    $scope.showDialog = false;
    console.log($scope)
  })
}

module.exports = loginController;