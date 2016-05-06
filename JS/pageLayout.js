angular.module("pageLayoutModule", ["constantsModule"])

.controller("pageLayoutController", ["$scope", "layoutDimensionsFactory", "constantsFactory", function($scope, layoutDimensionsFactory, constantsFactory) {

	//move to .ready eventually
	constantsFactory.setCONTENT_HOME_ID("#contentHome");
	constantsFactory.setFOOTER_ID("#sectionContact");
	constantsFactory.setHAMBURGER_BUTTON_ID("#hamburgerCollapseToggle");
	constantsFactory.setNAVBAR_ID("#navbar");
	constantsFactory.setNAVBAR_COLLAPSED_TAB_CONTAINER_ID("#collapsedNavBarTabContainer");
	constantsFactory.setNAVBAR_TABS_LIST_CLASS(".navBarTabsList");
	constantsFactory.setNAVBAR_TEXT_CLASS(".navBarText");

	layoutDimensionsFactory.instantiateInitialHeight();
	layoutDimensionsFactory.heightResizeListener();

}])

.factory("layoutDimensionsFactory", ["constantsFactory", function(constantsFactory) {
	
	//currently undefined... Fix!
	var contentHomeId = constantsFactory.getCONTENT_HOME_ID();

	return {

		instantiateInitialHeight: function() {

			var windowHeight = $(window).height();

			$("#contentHome").css({"height": windowHeight});

		},

		heightResizeListener: function() {

			$(window).resize(function() {

				var windowHeight = $(window).height();

				$("#contentHome").css({"height": windowHeight});

			});

		}

	}

}])

.factory("triggerScrollFactory", ["constantsFactory", function(constantsFactory) {

	var navBarId = constantsFactory.getNAVBAR_ID();
	var navBarHeight = parseInt($(navBarId).css("height"));

	return {

		navBarScroll: function(scrollToElement) {

			var $root = $("html, body");

			$root.stop(true).animate({
				scrollTop: ($(scrollToElement).offset().top - navBarHeight)
			}, 600);

			return false;

		}

	}

}])

.factory("buttonFactory", function() {

	return {

		upTheOpacity: function(element, alpha) {
			$(element).stop(true).animate({backgroundColor: jQuery.Color({alpha: alpha}) }, 225);
		},

		downTheOpacity: function(element) {
			$(element).stop(true).animate({backgroundColor: jQuery.Color({alpha: "0.00"}) }, 225);
		}

	}

})

.factory("hyperTextFactory", ["constantsFactory", function(constantsFactory) { 

	var navBarId = constantsFactory.getNAVBAR_ID();

	return {

		enableHoverCSS: function(element) {
			
			$(element).stop(true).animate({color: "#1AA0D6"}, 225);

		},

		disableHoverCSS: function(element, elementType) {

			switch (elementType) {

				case "navBar":

					var whiteBackground = "rgb(255, 255, 255)";
					var verticalDisplacement = $(document).scrollTop();

					if ($(navBarId).css("background-color") === whiteBackground) {
						$(element).stop(true).animate({color: "#000000"}, 225);
					} else {

						//adjust accordingly if still scrolling
						//TODO: try window.onScroll?

						 if (verticalDisplacement > 600) {
						 	$(element).stop(true).animate({color: "#000000"}, 225);
						 } else {
						 	$(element).stop(true).animate({color: "#FFFFFF"}, 225);
						 }
					
					}
	
					break;


				case "contentContainer":



					break;

			}

		}

	}

}])