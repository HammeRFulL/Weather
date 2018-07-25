var app = angular.module('app', []);
var data3;

app.controller('postcontroller', function($scope, $http, $location) {
	$scope.submitForm = function(){
		var data2;
		var ciudad="";
		var pais="";
		var lat=0;
		var lon=0;
		var temperatura=0;
		var speed=0;
		var url = $location.absUrl() + "postweather";
		
		var config = {
                headers : {
                    'Accept': 'text/plain'
                }
        }
		if($scope.mSystem!='Imperial'){
			$scope.mSystem='Metric';
		}
		fetch('http://api.openweathermap.org/data/2.5/weather?q='+$scope.ciudad+'&units='+$scope.mSystem+'&APPID=83133b86cedb7a925a15524e3ffe5bdf').then(response => {
			  return response.json();
			}).then(data2 => {
			  // Work with JSON data here
				  ciudad=data2.name;
				  pais=data2.sys.country;
				  lat=data2.coord.lat;
				  lon=data2.coord.lon;
				  temperatura=data2.main.temp;
				  speed=data2.wind.speed;/*
				  console.log(ciudad);
				  console.log(data2.sys.country);
				  console.log(data2.coord.lat);
				  console.log(data2.coord.lon);
				  console.log(data2.main.temp);
				  console.log(data2.wind.speed);*/
				  data3 = {
						  Ciudad: ciudad,
				          Pais: pais,
				          Latitud: lat,
				          Longuitud: lon,
				          Temperatura: temperatura,
				          Viento: speed
				        };
					//console.log(data3)
				  console.log(data3.Ciudad);
				  console.log(data3.Pais);
			}).catch(err => {
			  // Do something for an error here
			});
		var data = {
            Ciudad: $scope.ciudad,
            Pais: $scope.mSystem
        };
		//console.log($data3.Ciudad);
		$http.post(url, data, config).then(function (response) {
			$scope.postResultMessage = response.data;
		}, function error(response) {
			$scope.postResultMessage = "Error with status: " +  response.statusText;
		});
		
		$scope.ciudad = "";
		$scope.mSystem = "";
	}
});
 
app.controller('getcontroller', function($scope, $http, $location) {
	$scope.getfunction = function(){
		var url = $location.absUrl() + "getallweather";
		
		$http.get(url).then(function (response) {
			$scope.response = response.data
		}, function error(response) {
			$scope.postResultMessage = "Error with status: " +  response.statusText;
		});
	}
});