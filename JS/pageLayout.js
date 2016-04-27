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

.factory()