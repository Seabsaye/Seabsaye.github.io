angular.module("cardModule", [])

.controller("cardController", ["$scope", "cardButtonFactory", function($scope, cardButtonFactory) {

	$scope.arkParadigm = {

		title: "Ark Paradigm", image: "Images/arkParadigmLogoTitleCopy.png", description: "Developed company's website from scratch using HTML5, CSS3, Angular Js, Jquery, MySql, and Python", button: "VIEW SITE", link: "http://arkParadigm.com"

	};

	$scope.joinmi = {

		title: "Joinmi", image: "Images/joinmiLogo.svg", description: "App that streamlines impomptue get togethers. Built using the phonegap framework at Hack the 6ix 2016.", button: "CHECK IT OUT", link: "http://devpost.com/software/joinmi"

	}

	$scope.pixelbot = {

		title: "pixelbot", image: "", description: "startupstartupstartupstartupstartupstartup", button: "VISIT SITE", link: "http://www.hellopixelbot.com"

	}

	$scope.marvin = {
	
		title: "Marvin", image: "", description: "A web bot built as a personal assistant to manage the schedules of all within a household. Developed with the power of regular expressions and Microsoft's Azure framework at mcHacks 2016.", button: "CHECK IT OUT"
	
	};

	$scope.buttonOnHover = function(button) {
		cardButtonFactory.upTheOpacity(button);
	};

	$scope.buttonOffHover = function(button) {
		cardButtonFactory.downTheOpacity(button);
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

.factory("cardButtonFactory", function() {

	return {

		upTheOpacity: function(element) {
			
			$(element).animate({opacity: '1.0'}, 2000);

		},

		downTheOpacity: function(element) {

			$(element).animate({opacity: '0.0'}, 2000);

		}

	}

})