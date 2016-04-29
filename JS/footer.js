angular.module("footerModule", [])

.controller("footerController", ["$scope", "footerResizeFactory", function($scope, footerResizeFactory) {

	$(document).ready(function() {
		footerResizeFactory.setFooterHeight();
	});

	$(window).resize(function() {
		footerResizeFactory.setFooterHeight();
	});

}])

.factory("footerResizeFactory", function() {

	var FOOTER_ID = "#contentContact";
	var FOOTER_HEIGHT = 167;

	return {

		setFooterHeight: function() {

			var windowWidth = $(window).width();

			if (windowWidth < 768) {
				var footerHeight = (FOOTER_HEIGHT / 2.0) + "px";
				$(FOOTER_ID).css({height: footerHeight});
			} else {
				var footerHeight = FOOTER_HEIGHT + "px";
				$(FOOTER_ID).css({height: footerHeight});
			}

		}

	}

})