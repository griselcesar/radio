angular.module('tanek',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/',{
				controller:"home",
				templateUrl:"vistas/home.html"
			})
			.when('/radio',{
				controller:"radio",
				templateUrl:"vistas/radio.html"
			})
			.when('/tv',{
				controller:"tv",
				templateUrl:"vistas/tv.html"
			})
			.when('/404',{
				controller:"404",
				templateUrl:"vistas/404.html"
			})
			.otherwise('/404');
	}]);