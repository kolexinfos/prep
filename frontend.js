//angular js app file, require all external ng modules

//get top level controllers and routes
var application = require("app")

require("home");
require("card-viewer");
require("question-editor");

//top level application module
var app = angular.module("preptitude",['ui-router','home','card-viewer','question-editor']);

//application configuration and routes
app.config(['$routeProvider','$locationProvider',application.config])

//main application controller
app.controller('appController',application.controller);

module.exports = app;