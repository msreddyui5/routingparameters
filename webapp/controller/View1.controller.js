sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saproutingparameters.controller.View1", {
		
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var oTable = this.getView().byId("abc");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/Object.json");
			oTable.setModel(oModel);
		},
		
		onPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var sPath = oItem.getBindingContext().getPath("Name");
			var sPath1 = oItem.getBindingContext().getPath("Branch");
			var oTable = this.getView().byId("abc");
			var modelData = oTable.getModel();
			var data = modelData.getProperty(sPath);
			var data1 = modelData.getProperty(sPath1);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view22", {
				invoicePath: data,
				invoicePath1: data1
			});
		},
		
		
		
		
		
		
		
		 /* for deleting the selected table data using selected row index or Id */


		ondeletepress: function(evt) {
			if (evt.getSource().getParent().getParent().getItems().length > 0) {
				var row = evt.getSource().getParent().getId();
				evt.getSource().getParent().getParent().removeItem(row);
			}

		}

	});
});