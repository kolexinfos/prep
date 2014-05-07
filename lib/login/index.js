
//defines login in module
var login = angular.module("login",['ngObjectStore']);

login.controller("LoginController",require('./loginController'));
login.directive("prepSignup",require('./loginDirective'))
//console.log(require('./loginDirective'))

//prepSignUpDirective
module.exports = login;