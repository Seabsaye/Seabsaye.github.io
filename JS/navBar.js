angular.module("navBarModule", [])

.controller("navBarController", ["$scope", "navBarCSSFactory", "navBarCollapsedFactory", "navBarScrollFactory", function($scope, navBarCSSFactory, navBarCollapsedFactory, navBarScrollFactory) {

	navBarCSSFactory.initialCSS();
	navBarCollapsedFactory.setNavBarHorizontal();
	navBarCollapsedFactory.collapsedNavBarCSS();
	navBarScrollFactory.scrolledNavBar();


}])

.factory("navBarCSSFactory", function() {

	var NAVBAR_ID = "#navbar";

	return {

		initialCSS: function() {

			$(document).ready(function() {
		
				var windowWidth = $(window).width();

				if (windowWidth < 768) {
					$(NAVBAR_ID).css("background-color", "#FFFFFF");
					$("#hamburgerCollapseToggle").css({display: "block"});
					$(".navbarUl").css({display: "none"});
				}

			});

		},

		enableSecondaryCSS: function() {
			
			$("#collapsedNavBar").css({visibility: "hidden"});

			$(NAVBAR_ID).stop(true).fadeOut(50, function() {
				$("#collapsedNavBar").css({visibility: "visible"});
				$(NAVBAR_ID).css({backgroundColor: "#FFFFFF"});
				$("#hamburgerCollapseToggle").css({display: "block"});
				$(".navbarUl").css({display: "none"});
				$(NAVBAR_ID).stop(true).fadeIn(300);

			});

		},

		disableSecondaryCSS: function() {

			$(NAVBAR_ID).stop(true).fadeOut(50, function() {
				$(".navbarUl").css({display: "block"});
				$("#hamburgerCollapseToggle").css({display: "none"});
				$(NAVBAR_ID).css({backgroundColor: "transparent"});
				$(NAVBAR_ID).stop(true).fadeIn(300);

			});
						
		}

	};

})

.factory("navBarCollapsedFactory", ["navBarCSSFactory", function(navBarCSSFactory) {

	var navBarHorizontal;

	return {

		setNavBarHorizontal: function() {

			$(document).ready(function() {

				var windowWidth = $(window).width();

				if (windowWidth < 768) {
					navBarHorizontal = false;
				} else {
					navBarHorizontal = true;
				}

			});

		},

		collapsedNavBarCSS: function() {

			$(window).resize(function() {
		
				var windowWidth = $(window).width();

				if (windowWidth < 768) {

					if (navBarHorizontal === true) {
						navBarCSSFactory.enableSecondaryCSS();
					}

					navBarHorizontal = false;

				} else {

					if (navBarHorizontal === false) {
						navBarCSSFactory.disableSecondaryCSS();
					}

					navBarHorizontal = true;

					$("#hamburgerCollapseToggle").css({display: "none"});

				}

			});

		}

	}

}])

.factory("navBarScrollFactory", ["navBarCSSFactory", function(navBarCSSFactory) {

	return {
		
		scrolledNavBar: function() {

			$(window).scroll(function() {

				var windowHeight = $(window).height();
				var winowWidth = $(window).width();
				var scrollBarDisplacement = $(document).scrollTop();

				if (scrollBarDisplacement > windowHeight) {
					
				} else {
					
				}

			});

		}

	}

}])