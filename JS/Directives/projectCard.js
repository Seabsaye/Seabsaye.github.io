angular.module("cardModule", ["pageLayoutModule"])

.controller("cardController", ["$scope", "buttonFactory", function($scope, buttonFactory) {
	
	$scope.creditkarma = {
                title: "Credit Karma",
                image: "Images/ckLogo.png",
                description: "Built an Apollo GraphQL client for the UK product ecosystem, " +
                			 "setting the standard for all future GraphQL work. Also developed a GraphQL " +
                			 "scalar validation framework used to validate all UK GraphQL network traffic.",
                button: "CHECK IT OUT",
                link: "https://www.creditkarma.co.uk/",
                buttonIndex: 0,
                imgStyle: "margin-top: 15%; height: 140px",
                imageLink: "https://www.creditkarma.com/" 
        };

	$scope.pagerduty = {
                title: "PagerDuty",
                image: "Images/pagerdutyLogo.png",
                description: "Developed live-updating using WebSockets in the iOS app, " + 
                			 "re-architected iOS app sections using Protocol-Oriented Programming, " +
                			 "and led engineering initiatives for new mobile features and improvements.",
                button: "CHECK IT OUT",
                link: "https://itunes.apple.com/us/app/pagerduty/id594039512?mt=8",
                buttonIndex: 1,
                imgStyle: "margin-top: 15%; height: 140px",
                imageLink: "https://www.pagerduty.com" 
        };

	$scope.everest = {
		title: "Everest",
		image: "Images/everestLogo.png",
		description: "iOS app that optimizes event communication and organization via " + 
					 "in-event newsfeeds, direct messaging, lists of guests and hosts, " +
					 "and more. Being built using Swift, Node.js, and MongoDB coupled " +
					 "with AWS EC2.",
		button: "CHECK IT OUT",
		link: "http://www.everestapp.ca",
		buttonIndex: 2,
		imgStyle: "margin-top: 15%; height: 140px",
		imageLink: "http://www.everestapp.ca"
	};

	$scope.tribalscale = {
		title: "TribalScale",
		image: "Images/tribalscaleLogo.png",
		description: "Architected event organizer for cruise passengers in major cruise " +
					 "line's Objective-C iOS app used by 20k+ passengers daily. Developed " +
					 "this feature and many others in an Extreme Programming environment.",
		button: "COMPANY SITE",
		link: "http://www.tribalscale.com",
		buttonIndex: 3,
		imgStyle: "margin-top: 15%; height: 140px",
		imageLink: "http://www.tribalscale.com"
	}

	$scope.td = {
		title: "TD Innovation Labs", 
		image: "Images/tdBankLogo.png", 
		description: "Built a significant, currently confidential Swift app to the MVP. " +
					  "Architected features such as child savings breakdown and Touch ID " +
					  "authentication for the TD Family Allowance Objective-C app.", 
		button: "CHECK IT OUT",
		link: "https://appadvice.com/app/family-allowance/1090612479",
		buttonIndex: 4,
		imgStyle: "margin-top: 15%; height: 140px",
		imageLink: "https://appadvice.com/app/family-allowance/1090612479"
	};

	$scope.arkParadigm = {
		title: "Ark Paradigm", 
		image: "Images/arkParadigmLogoTitle.png", 
		description: "Implemented startup's website using HTML5, CSS3, AngularJS 1, " +
			         "jQuery, MySQL, and Python.", 
		button: "CHECK IT OUT", 
		link: "http://arkParadigm.com", 
		buttonIndex: 5, 
		imgStyle: "margin-top: 22%",
		imageLink: "http://arkParadigm.com"
	};

	$scope.joinmi = {
		title: "Joinmi", 
		image: "Images/joinmiLogo.svg", 
		description: "App that streamlines impromptu get togethers. Built using " +
		 			 "HTML5, CSS3 and JavaScript with the Phonegap framework at " +
		 			 "Hack the 6ix 2016.", 
		button: "CHECK IT OUT", 
		link: "http://devpost.com/software/joinmi", 
		buttonIndex: 6, 
		imgStyle: "margin-top: 12%",
		imageLink: "http://devpost.com/software/joinmi"
	};

	$scope.pixelbot = {
		title: "Pixelbot", 
		image: "Images/pixelbotLogo.png", 
		description: "Developed features for startup's \"Uber for condos\" iOS app using Swift, " +
					 "PHP, and MySQL. Created Facebook, Google, and native account login and " +
					 "an account data merging system.", 
		button: "CHECK IT OUT", 
		link: "https://github.com/Seabsaye/iOS-Project-Alfred", 
		buttonIndex: 7, 
		imgStyle: "margin-top: 15%; height: 140px",
		imageLink: "http://www.hellopixelbot.com"
	};

	$scope.projects = [$scope.creditkarma, $scope.pagerduty, $scope.everest, $scope.tribalscale, $scope.td, $scope.arkParadigm, $scope.joinmi, $scope.pixelbot];

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
