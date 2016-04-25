angular.module("pageLayoutModule", [])

.controller("pageLayoutController", ["$scope", function($scope) {

	$(document).ready(function() {

		var windowHeight = $(window).height();

		$("#test").css({"height": windowHeight});
		

	});

	$(window).resize(function() {

		var windowHeight = $(window).height();
		console.log("Test");
		$("#test").css({"height": windowHeight});

	});
}])