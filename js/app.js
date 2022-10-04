var app = angular.module('Blog', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "views/home.html"
	})

	.when("/aboutme", {
		templateUrl: "views/aboutme.html",
		controller: "AboutMeController"
	})
	
	

	.otherwise({redirectTo: '/'})
})