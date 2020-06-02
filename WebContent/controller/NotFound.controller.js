sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.shunyu.lujb.fiori-training-two.controller.NotFound", {

		onNavBack: function () {
			this.getOwnerComponent().getRouter().navto("Home");
		}
	});

});