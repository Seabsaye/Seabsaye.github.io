angular.module("navBarModule", [])

.controller("navBarController", ["$scope", "navBarFactory", function($scope, navBarFactory) {

	$(document).ready(function() {
		navBarFactory.initialNavBarCSS();
	});

	$(window).resize(function() {
		navBarFactory.resizeNavBarCSS();
	});

}])

.factory("navBarFactory", function() {

	return {

		initialNavBarCSS: function() {

			var windowWidth = $(window).width();

			if (windowWidth < 768) {
				$("#navbar").css("background-color", "#FFFFFF");
			}

		},

		resizeNavBarCSS: function() {

			var windowWidth = $(window).width();

			if (windowWidth < 768) {
				$("#navbar").css("background-color", "#FFFFFF");
			} else {
				$("#navbar").css("background-color", "transparent");
			}

		}

	};

})