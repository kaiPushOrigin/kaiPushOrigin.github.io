var app = angular.module('myApp', []);
app.controller('coverCtrl', function($scope) {
	$(function(){
		$(".element").typed({
			strings: ["The most advanced API warehouse for insurance specific data. "],
			typeSpeed: 60
		});
	});
});