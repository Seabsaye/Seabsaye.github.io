angular.module("navBarModule", ["cardModule"])

.controller("navBarController", ["$scope", "navBarCSSFactory", "navBarCollapsedFactory", "navBarScrollFactory", "buttonFactory", function($scope, navBarCSSFactory, navBarCollapsedFactory, navBarScrollFactory, buttonFactory) {

	navBarCSSFactory.initialCSS();

	navBarCollapsedFactory.setNavBarHorizontal();
	navBarCollapsedFactory.collapsedNavBarCSS();

	navBarScrollFactory.setScrollControl()
	navBarScrollFactory.scrolledNavBar();

	$scope.onHamburgerHover = function() {

		var HAMBURGER_BUTTON_ID = "#hamburgerCollapseToggle";
		var OPACITY = "0.1";
		buttonFactory.upTheOpacity(HAMBURGER_BUTTON_ID, OPACITY);
	}

	$scope.offHamburgerHover = function() {

		var HAMBURGER_BUTTON_ID = "#hamburgerCollapseToggle";
		buttonFactory.downTheOpacity(HAMBURGER_BUTTON_ID);

	}

}])

.factory("navBarCSSFactory", function() {

	var NAVBAR_ID = "#navbar";

	return {

		initialCSS: function() {

			$(window).load(function(){
				setTimeout(function() { 
		
					var windowWidth = $(window).width();
					var windowHeight = $(window).height();
					var scrollBarDisplacement = $(document).scrollTop();

					if (windowWidth < 768) {

						$(NAVBAR_ID).css("background-color", "#FFFFFF");
						$("#hamburgerCollapseToggle").css({display: "block"});
						$(".navbarUl").css({display: "none"});
						$(".navbarText").css({color: "#000000"});

					} else if (scrollBarDisplacement > windowHeight) {

						$(NAVBAR_ID).css({backgroundColor: "#FFFFFF"});
						$(".navbarText").css({color: "#000000"});

					}

				}, 1);

			});

		},

		enableSecondaryCSS: function(event) {
			
			$("#collapsedNavBar").css({visibility: "hidden"});

			$(NAVBAR_ID).stop(true).fadeOut(50, function() {

				$(NAVBAR_ID).css({backgroundColor: "#FFFFFF"});

				switch (event) {

					case "collapse":

						$("#hamburgerCollapseToggle").css({display: "block"});
						$(".navbarUl").css({display: "none"});

						break;

					case "scroll":

						break;

				}

				$(".navbarText").css({color: "#000000"});
				$("#collapsedNavBar").css({visibility: "visible"});
				$(NAVBAR_ID).stop(true).fadeIn(300);

			});

		},

		disableSecondaryCSS: function(event) {

			$(NAVBAR_ID).stop(true).fadeOut(50, function() {

				switch (event) {

					case "collapse":

						$(".navbarUl").css({display: "block"});
						$("#hamburgerCollapseToggle").css({display: "none"});

						var windowHeight = $(window).height();
						var scrollBarDisplacement = $(window).scrollTop();

						if (scrollBarDisplacement < windowHeight) {
							$(".navbarText").css({color: "#FFFFFF"});
							$(NAVBAR_ID).css({backgroundColor: "transparent"});
						}
					
						break;

					case "scroll":

						var windowWidth = $(window).width();

						if (windowWidth < 768) {
							$(NAVBAR_ID).css({backgroundColor: "#FFFFFF"});
						} else {
							$(".navbarText").css({color: "#FFFFFF"});
							$(NAVBAR_ID).css({backgroundColor: "transparent"});
						}

						break;

				}

				
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
						navBarHorizontal = false;
						navBarCSSFactory.enableSecondaryCSS("collapse");
					}

					

				} else {

					if (navBarHorizontal === false) {
						navBarCSSFactory.disableSecondaryCSS("collapse");
					}

					navBarHorizontal = true;

					$("#hamburgerCollapseToggle").css({display: "none"});

				}

			});

		}

	}

}])

.factory("navBarScrollFactory", ["navBarCSSFactory", function(navBarCSSFactory) {

	var didSurpassWindowHeight;

	return {
		
		setScrollControl: function() {

			$(window).load(function(){
			    setTimeout(function() {

			    	var windowHeight = $(window).height();
				
					var scrollBarDisplacement = $(window).scrollTop();
						
					if (scrollBarDisplacement > windowHeight) {
						didSurpassWindowHeight = true;
						
						
					} else {
						didSurpassWindowHeight = false;
					}

			    }, 1);
			});
		},

		scrolledNavBar: function() {

			$(window).scroll(function() {

				var windowHeight = $(window).height();
				var windowWidth = $(window).width();
				var scrollBarDisplacement = $(document).scrollTop();

				if (scrollBarDisplacement > windowHeight) {
					
					if (didSurpassWindowHeight === false) {

						if (windowWidth > 768) {
							navBarCSSFactory.enableSecondaryCSS("scroll");
						}

						didSurpassWindowHeight = true;
					}

				} else {
					
					if (didSurpassWindowHeight === true) {

						if (windowWidth > 768) {
							navBarCSSFactory.disableSecondaryCSS("scroll");
						}

					}

					didSurpassWindowHeight = false;
				}

			});

		}

	}

}])

// .factory("navBarHoverFactory", ["buttonFactory", function() {

// 	return {

// 		onHamburgerButton: function() {

// 			buttonFactory.upTheOpacity("#hamburgerCollapseToggle");

// 		},



// 	}

// }])