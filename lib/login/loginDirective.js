//login directive
var prepSignUpDirective = function(){
  //private variables..anything defined before the return statement is private to this function..classic module pattern technique.
  console.log("Prepsign up")
  return{
    restrict:"E",
    templateUrl:"/build/login/views/template.html",
    controller:"LoginController",
    link:function(scope,el,attrib, ctrl){

      var overlay = angular.element(".overlay");
      var loginWrap = angular.element(".loginWrap");
      var loginScope = null;

      //when the event for sign up request is caught, get the scope that emitted the event and set show dialog to true
      scope.$on("signupClicked",function(s){
        s.targetScope.showDialog=true;
        loginScope = s.targetScope;
      });

      //
      overlay.on('click',function(){
        scope.showDialog = false;
        scope.$apply();
      });
    }
  }
}

module.exports = prepSignUpDirective;