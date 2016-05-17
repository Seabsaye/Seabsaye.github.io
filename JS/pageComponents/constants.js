angular.module("constantsModule", [])

.factory("constantsFactory", function() {

	var CONTENT_HOME_ID;
	var FOOTER_ID;
	var HAMBURGER_BUTTON_ID;
	var NAVBAR_ID;
	var NAVBAR_COLLAPSED_TAB_CONTAINER_ID;
	var NAVBAR_TABS_LIST_CLASS;
	var NAVBAR_TEXT_CLASS;
	var LOADING_MASK_ID;

	return {

		setCONTENT_HOME_ID: function(id) {
			CONTENT_HOME_ID = id;
		},

		setFOOTER_ID: function(footerId) {
			FOOTER_ID = footerId;
		},

		setHAMBURGER_BUTTON_ID: function(hamburgerButtonId) {
			HAMBURGER_BUTTON_ID = hamburgerButtonId;
		},

		setNAVBAR_ID: function(navBarId) {
			NAVBAR_ID = navBarId;
		},

		setNAVBAR_COLLAPSED_TAB_CONTAINER_ID: function(navBarCollapsedTabContainerId) {
			NAVBAR_COLLAPSED_TAB_CONTAINER_ID = navBarCollapsedTabContainerId;
		},

		setNAVBAR_TABS_LIST_CLASS: function(navBarTabsListClass) {
			NAVBAR_TABS_LIST_CLASS = navBarTabsListClass;
		},

		setNAVBAR_TEXT_CLASS: function(navBarTextClass) {
			NAVBAR_TEXT_CLASS = navBarTextClass;
		},

		setLOADING_MASK_ID: function(loadingMaskId) {
			LOADING_MASK_ID = loadingMaskId;
		},

		getCONTENT_HOME_ID: function() {
			return CONTENT_HOME_ID;
		},

		getFOOTER_ID: function() {
			return FOOTER_ID;
		},

		getHAMBURGER_BUTTON_ID: function() {
			return HAMBURGER_BUTTON_ID;
		},

		getNAVBAR_ID: function() {
			return NAVBAR_ID;
		},

		getNAVBAR_COLLAPSED_TAB_CONTAINER_ID: function() {
			return NAVBAR_COLLAPSED_TAB_CONTAINER_ID;
		},

		getNAVBAR_TABS_LIST_CLASS: function() {
			return NAVBAR_TABS_LIST_CLASS;
		},

		getNAVBAR_TEXT_CLASS: function() {
			return NAVBAR_TEXT_CLASS;
		},

		getLOADING_MASK_ID: function() {
			return LOADING_MASK_ID;
		}
		
	}

})