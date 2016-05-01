angular.module("footerModule", ["constantsModule"])

.controller("footerController", ["$scope", "footerResizeFactory", function($scope, footerResizeFactory) {

	$(document).ready(function() {
		footerResizeFactory.setFooterHeight();
	});

	$(window).resize(function() {
		footerResizeFactory.setFooterHeight();
	});

}])

.factory("footerResizeFactory", ["constantsFactory", function(constantsFactory) {

	var footerId = constantsFactory.getFOOTER_ID();
	var footerHeight = parseInt($(footerId).css("height"));

	return {

		setFooterHeight: function() {

			var windowWidth = $(window).width();

			if (windowWidth < 768) {
				var height = (footerHeight / 2.0) + "px";
				$(footerId).css({height: height});
			} else {
				var height = footerHeight + "px";
				$(footerId).css({height: height});
			}

		}

	}

}])