angular.module("navBarModule", [])

.controller("navBarController", ["$scope", function($scope) {

	var windowWidth = $(window).width();

	$(window).on("resize", function() {

		if (windowWidth < 768) {

			$("#navbar").css("background-color", "#FFFFFF");

		} else {
			return;
		}

	});

}])

.factory("navBarFactory", function() {

	return {

		setCollapsedNavCSS: function() {

			var windowWidth = $(window).width();

			$(window).on("resize", function() {

				if (windowWidth < 768) {

					log("test");

				} else {
					return;
				}

			});

		}

	};

})