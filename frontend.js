//angular js app file, require all external ng modules

//get top level controllers and routes
var application = require("app")

require("home");
require("cardviewer");
require("question-editor");
require("login");
require("signup")

//top level application module
var app = angular.module('Preptitude',[
  'ui.router',
  'home',
  'cardviewer',
  'qEditor',
  'login',
  'signup'
]);

//application configuration and routes
app.config(['$stateProvider','$locationProvider',application.config])

//main application controller
app.controller('appController',application.controller);

module.exports = app;