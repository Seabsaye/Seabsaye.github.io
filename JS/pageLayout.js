angular.module("pageLayoutModule", [])

.controller("pageLayoutController", ["$scope", "layoutDimensionsFactory", function($scope, layoutDimensionsFactory) {

	layoutDimensionsFactory.instantiateInitialHeight();

	layoutDimensionsFactory.heightResizeListener();

}])

.factory("layoutDimensionsFactory", function() {

	return {

		instantiateInitialHeight: function() {

			$(document).ready(function() {

				var windowHeight = $(window).height();

				$("#contentHome").css({"height": windowHeight});
				
			});

		},

		heightResizeListener: function() {

			$(window).resize(function() {

				var windowHeight = $(window).height();

				$("#contentHome").css({"height": windowHeight});

			});

		}

	}

})

.factory("triggerScrollFactory", function() {

	return {

		scroll: function(scrollToElement) {

			var $root = $("html, body");

			$root.animate({
				scrollTop: $(scrollToElement).offset().top
			}, 600);

			return false;

		}

	}

})

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

.factory("hyperTextFactory", function() { 

	return {

		enableHoverCSS: function(element) {
			
			$(element).stop(true).animate({color: "#1aa0d6"}, 225);

		},

		disableHoverCSS: function(element, elementType) {

			switch (elementType) {

				case "navBar":

					var NAVBAR_ID = "#navbar";

					var whiteBackground = "rgb(255, 255, 255)";

					if ($(NAVBAR_ID).css("background-color") === whiteBackground) {
						$(element).stop(true).animate({color: "#000000"}, 225);
					} else {

						//adjust accordingly if still scrolling
						//TODO: try window.onScroll?

						var verticalDisplacement = $(document).scrollTop();

						if (verticalDisplacement > 550) {
							$(element).stop(true).animate({color: "#000000"}, 225);
						} else {
							//alert(verticalDisplacement);
							$(element).stop(true).animate({color: "#FFFFFF"}, 225);
						}
					
					}
	
					break;


				case "contentContainer":



					break;
			}

			

		}

	}

})