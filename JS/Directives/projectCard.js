angular.module("cardModule", ["pageLayoutModule"])

.controller("cardController", ["$scope", "buttonFactory", function($scope, buttonFactory) {

	$scope.everest = {
		title: "Everest",
		image: "Images/everestLogo.png",
		description: "iOS app that optimizes event communication and organization via in-event newsfeeds, direct messaging, lists of guests and hosts, and more. Built using Swift coupled with a NodeJS and MongoDB backend.",
		button: "GET IT",
		link: "https://itunes.apple.com/ca/app/family-allowance/id1090612479?mt=8",
		buttonIndex: 0,
		imgStyle: "margin-top: 15%; height: 140px"
	};

	$scope.td = {
		title: "TD Innovation Labs", 
		image: "Images/tdBankLogo.png", 
		description: "Built a significant, currently confidential Swift app to the MVP, and architected features such as child savings breakdown in the TD Family Allowance Objective-C app.", 
		button: "CHECK IT OUT",
		link: "https://itunes.apple.com/ca/app/family-allowance/id1090612479?mt=8",
		buttonIndex: 1,
		imgStyle: "margin-top: 15%; height: 140px"
	};

	$scope.arkParadigm = {
		title: "Ark Paradigm", 
		image: "Images/arkParadigmLogoTitle.png", 
		description: "Implemented startup's website using HTML5, CSS3, AngularJS 1, jQuery, MySQL, and Python.", 
		button: "CHECK IT OUT", 
		link: "http://arkParadigm.com", 
		buttonIndex: 2, 
		imgStyle: "margin-top: 22%"
	};

	$scope.joinmi = {
		title: "Joinmi", 
		image: "Images/joinmiLogo.svg", 
		description: "App that streamlines impromptu get togethers. Built using HTML5, CSS3 and JavaScript with the Phonegap framework at Hack the 6ix 2016.", 
		button: "CHECK IT OUT", 
		link: "http://devpost.com/software/joinmi", 
		buttonIndex: 3, 
		imgStyle: "margin-top: 12%"
	};

	$scope.pixelbot = {
		title: "Pixelbot", 
		image: "Images/pixelbotLogo.png", 
		description: "Developed \"Uber for condos\" iOS app for startup using Swift, PHP, and MySQL, as well as integrating Facebook, Google, and native login and account-merging systems.", 
		button: "CHECK IT OUT", 
		link: "https://github.com/Seabsaye/iOS-Project-Alfred", 
		buttonIndex: 4, 
		imgStyle: "margin-top: 15%; height: 140px"
	};

	$scope.projects = [$scope.everest, $scope.td, $scope.arkParadigm, $scope.joinmi, $scope.pixelbot];

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
