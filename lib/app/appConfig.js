
var config = function($stateProvider,$locationProvider,$rootScope){
  $stateProvider.state("qEditorHome",{
    templateUrl:"/build/question-editor/template.html"
  })
}

module.exports = config;