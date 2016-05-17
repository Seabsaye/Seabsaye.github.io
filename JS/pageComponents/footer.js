angular.module("footerModule", ["constantsModule", "pageLayoutModule"])

.controller("footerController", ["$scope", "footerResizeFactory", "buttonFactory", function($scope, footerResizeFactory, buttonFactory) {

	$(document).ready(function() {
		footerResizeFactory.setFooterHeight();
	});

	$(window).resize(function() {
		footerResizeFactory.setFooterHeight();
	});

	$scope.buttonOnHover = function($event) {

		var button = $event.currentTarget;
		var opacity = "0.04";

		buttonFactory.upTheOpacity(button, opacity);

	}

	$scope.buttonOffHover = function($event) {

		var button = $event.currentTarget;

		buttonFactory.downTheOpacity(button);

	}

}])

.factory("footerResizeFactory", ["constantsFactory", function(constantsFactory) {

	var footerId = constantsFactory.getFOOTER_ID();
	var footerHeight = parseInt($(footerId).css("height"));
	var copyrightMargin = document.getElementById("copyrightStatement");
	var connectSquares = document.getElementsByClassName("connectSquare");

	return {

		setFooterHeight: function() {

			var windowWidth = $(window).width();

			if (windowWidth < 768) {

				var height = (footerHeight / 1.5) + "px";

				$(footerId).css({height: height});
				$(copyrightMargin).css({marginTop: "24px"});

				for (var i=0; i<connectSquares.length; i++) {
					$(connectSquares[i]).css({margin: "22px 2.5px 0px 2.5px", padding: "7px 11px"});
				}

			} else {

				var height = footerHeight + "px";

				$(footerId).css({height: height});
				$(copyrightMargin).css({marginTop: "50px"});

				for (var i=0; i<connectSquares.length; i++) {
					$(connectSquares[i]).css({margin: "44px 6.75px 0px 6.75px", padding: "10px 14px"});
				}
				
			}

		}

	}

}])