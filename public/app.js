var app = angular.module("ojs", ['ui.router']);
app.controller("MainController", ['$scope', '$http', function($scope, $http){
	$scope.search = function(CodeClient){
		$http.get("http://192.168.0.103/MEDSAAPI/api/Socio/" + CodeClient).then(UserComplete, UserError)
	};
	var UserComplete = function(response){
		$scope.CardCode = response.data;
		$http.get($scope.CardCode).then(UserError)
	};
	var UserError = function(reason){
		$scope.error = "Upss! Revisa Tu Conección a Internet";
	};
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('guy_route2', {
    url: "{index:int}",
    templateProvider: function($templateRequest, $stateParams) {

      var index = $stateParams.index + 1;
      var templateName = 'nodemodules' + index + '.html';

      return $templateRequest(templateName);
    },
  })
})


console.log('DEMO PETO');