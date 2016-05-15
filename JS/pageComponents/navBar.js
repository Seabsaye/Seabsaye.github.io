angular.module("navBarModule", ["pageLayoutModule", "constantsModule"])

.controller("navBarController", ["$scope", "constantsFactory", "navBarCSSFactory", "navBarCollapsedFactory", "navBarScrollFactory", "buttonFactory", "triggerScrollFactory", "hyperTextFactory", function($scope, constantsFactory, navBarCSSFactory, navBarCollapsedFactory, navBarScrollFactory, buttonFactory, triggerScrollFactory, hyperTextFactory) {

	var hamburgerButtonId = constantsFactory.getHAMBURGER_BUTTON_ID();
	var navBarCollapsedTabContainerId = constantsFactory.getNAVBAR_COLLAPSED_TAB_CONTAINER_ID();
	var collapsedNavBarTextResume = document.getElementById("collapsableTextResume");

	navBarCSSFactory.initialCSS();

	navBarCollapsedFactory.setNavBarHorizontal();
	navBarCollapsedFactory.collapsedNavBarCSS();

	navBarScrollFactory.setScrollControl()
	navBarScrollFactory.scrolledNavBar();

	$scope.onHamburgerHover = function() {

		var opacity = "0.1";
		buttonFactory.upTheOpacity(hamburgerButtonId, opacity);
	}

	$scope.offHamburgerHover = function() {


		buttonFactory.downTheOpacity(hamburgerButtonId);

	}

	$scope.scrollTo = function(scrollToElement) {
		triggerScrollFactory.navBarScroll(scrollToElement);
	}

	$scope.onLinkHover = function(link) {
		var elementType = "navBar";
		hyperTextFactory.enableHoverCSS(link, elementType);
	}

	$scope.offLinkHover = function(link) {
		var elementType = "navBar";
		hyperTextFactory.disableHoverCSS(link, elementType);
	}

	//reverts text colour of "Resume" in collapsable back to #000000 upon collapse completion
	$(navBarCollapsedTabContainerId).on('hidden.bs.collapse', function () {
		$(collapsedNavBarTextResume).css({color: "#000000"});
	})

}])

.factory("navBarCSSFactory", ["constantsFactory", function(constantsFactory) {

	var navBarId = constantsFactory.getNAVBAR_ID();
	var navBarCollapsedTabContainer = constantsFactory.getNAVBAR_COLLAPSED_TAB_CONTAINER_ID();
	var hamburgerButtonId = constantsFactory.getHAMBURGER_BUTTON_ID();
	var navBarTabsListClass = constantsFactory.getNAVBAR_TABS_LIST_CLASS();
	var navBarTextClass = constantsFactory.getNAVBAR_TEXT_CLASS(); 

	var navBarHeight = parseInt($(navBarId).css("height"));

	return {

		initialCSS: function() {

			$(window).load(function(){
				setTimeout(function() { 
		
					var windowWidth = $(window).width();
					var windowHeight = $(window).height();
					var scrollBarDisplacement = $(document).scrollTop();

					if (windowWidth < 768) {

						$(navBarId).css("background-color", "#FFFFFF");
						$(hamburgerButtonId).css({display: "block"});
						$(navBarTabsListClass).css({display: "none"});
						$(navBarTextClass).css({color: "#000000"});

					} else if (scrollBarDisplacement > windowHeight) {

						$(navBarId).css({backgroundColor: "#FFFFFF"});
						$(navBarTextClass).css({color: "#000000"});

					}

				}, 1);

			});

		},

		enableSecondaryCSS: function(event) {
			
			$(navBarCollapsedTabContainer).css({visibility: "hidden"});

			$(navBarId).stop(true).fadeOut(50, function() {

				$(navBarId).css({backgroundColor: "#FFFFFF"});

				switch (event) {

					case "collapse":

						$(hamburgerButtonId).css({display: "block"});
						$(navBarTabsListClass).css({display: "none"});

						break;

					case "scroll":
						$(navBarTextClass).css({color: "#000000"});
						break;

				}
				$(navBarTextClass).animate({color: "#000000"}, 50);
				$(navBarCollapsedTabContainer).css({visibility: "visible"});
				$(navBarId).stop(true).fadeIn(300);

			});

		},

		disableSecondaryCSS: function(event) {

			$(navBarId).stop(true).fadeOut(50, function() {

				switch (event) {

					case "collapse":

						$(navBarTabsListClass).css({display: "block"});
						$(hamburgerButtonId).css({display: "none"});

						var windowHeight = $(window).height();
						var scrollBarDisplacement = $(window).scrollTop();

						if (scrollBarDisplacement < windowHeight) {
							$(navBarTextClass).css({color: "#FFFFFF"});
							$(navBarId).css({backgroundColor: "transparent"});
						}
					
						break;

					case "scroll":
						
						var windowWidth = $(window).width();

						if (windowWidth < 768) {
							$(navBarId).css({backgroundColor: "#FFFFFF"});
						} else {
							$(navBarTextClass).css({color: "#FFFFFF"});
							$(navBarId).css({backgroundColor: "transparent"});
						}

						break;

				}

				
				$(navBarId).stop(true).fadeIn(300);

			});
						
		}

	};

}])

.factory("navBarCollapsedFactory", ["navBarCSSFactory", "constantsFactory", function(navBarCSSFactory, constantsFactory) {

	var navBarHorizontal;
	var hamburgerButtonId = constantsFactory.getHAMBURGER_BUTTON_ID();

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

					$(hamburgerButtonId).css({display: "none"});

				}

			});

		}

	}

}])

.factory("navBarScrollFactory", ["navBarCSSFactory", "constantsFactory", function(navBarCSSFactory, constantsFactory) {

	var didSurpassWindowHeight;
	
	var navBarId = constantsFactory.getNAVBAR_ID();
	var navBarTextClass = document.getElementsByClassName("navBarText");
	var navBarHeight = parseInt($(navBarId).css("height"));

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

				if (scrollBarDisplacement > windowHeight - navBarHeight - 1) {
					
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