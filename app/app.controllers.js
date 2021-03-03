angular.module('tanek')
	.controller('home', ['$scope','$location', function($scope,$location){
			
			$scope.titulo = "Bienvenido";

			$scope.TV = function(){
				$location.path("/tv");
			};

			$scope.RADIO = function(){
				$location.path("/radio");
			};

	}])
	.controller('tv', ['$scope','$location', function($scope,$location){
			
			$scope.titulo = "Tv Tanek";

			$scope.HOME = function(){
				$location.path("/");
			};

	}])
	.controller('radio', ['$scope','$location', function($scope,$location){
			
			$scope.titulo = "Radio Tanek";

			$scope.HOME = function(){
				$location.path("/");
			};

	}])
	.controller('404', ['$scope','$location', function($scope,$location){
			
			$scope.info = "Pagina no encotrada";

			$scope.HOME = function(){
				$location.path("/");
			};

	}]);