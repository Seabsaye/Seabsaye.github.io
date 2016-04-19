angular.module("siteModule", [])

.controller("cardController", ["$scope", function($scope) {

	$scope.arkParadigm = {

		title: "Ark Paradigm", image: "Images/Ark%20Paradigm%20Logo.png", description: "Developed company's website from scratch using HTML5, CSS3, Angular Js, Jquery, MySql, and Python", button: "VIEW SITE"

	};

	$scope.marvin = {

		title: "Marvin", image: "", description: "A web bot built as a personal assistant to manage the schedules of all within a household. Developed with the power of regular expressions and Microsoft's Azure framework at mcHacks 2016.", button: "CHECK IT OUT"

	};

}])

.directive("projectCard", function() {

	return {

		restrict: "E",
		templateUrl: "HTML/directives/projectCard.html",
		scope: {
			cardProperties: "=type"
		}

	};

});