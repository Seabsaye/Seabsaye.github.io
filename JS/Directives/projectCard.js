angular.module("cardModule", ["pageLayoutModule"])

.controller("cardController", ["$scope", "buttonFactory", function($scope, buttonFactory) {

	$scope.arkParadigm = {

		title: "Ark Paradigm", image: "images/arkParadigmLogoTitle.png", description: "Developed startup's website using HTML5, CSS3, AngularJS, jQuery, MySQL, and Python.", button: "CHECK IT OUT", link: "http://arkParadigm.com", buttonIndex: 0, imgStyle: "margin-top: 22%"

	};

	$scope.joinmi = {

		title: "Joinmi", image: "images/joinmiLogo.svg", description: "App that streamlines impomptue get togethers. Built using the Phonegap framework at Hack the 6ix 2016.", button: "CHECK IT OUT", link: "http://devpost.com/software/joinmi", buttonIndex: 1, imgStyle: "margin-top: 12%"

	}

	$scope.pixelbot = {

		title: "Pixelbot", image: "images/pixelbotLogo.png", description: "Building \"Uber for condos\" iOS app for startup using Swift 2, PHP, and MySQL.", button: "VISIT SITE", link: "http://www.hellopixelbot.com", buttonIndex: 2, imgStyle: "margin-top: 15%; height: 140px"

	}

	// $scope.marvin = {
	
	// 	title: "Marvin", image: "", description: "A web bot built as a personal assistant to manage the schedules of all within a household. Developed with the power of regular expressions and Microsoft's Azure framework at mcHacks 2016.", button: "CHECK IT OUT", buttonIndex: 3, imgStyle: "margin-top: 22%"
	
	// };

	$scope.projects = [$scope.arkParadigm, $scope.joinmi, $scope.pixelbot, /*$scope.marvin*/];

	var cardButtonInstances = document.getElementsByClassName("cardButton");

	$scope.buttonOnHover = function(buttonIndex) {

		var button = cardButtonInstances[buttonIndex];
		var opacity = "0.04";

		buttonFactory.upTheOpacity(button, opacity);

	};

	$scope.buttonOffHover = function(buttonIndex) {

		var button = cardButtonInstances[buttonIndex];
		buttonFactory.downTheOpacity(button);

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

})