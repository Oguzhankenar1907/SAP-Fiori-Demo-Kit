sap.ui.define([], () => {
	"use strict";

	return {
		sTTText(sSTT) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sSTT) {
				case "Daha var":
					return oResourceBundle.getText("invoiceStatusA");
				case "Son Gün":
					return oResourceBundle.getText("invoiceStatusB");
				case "Geçmiş":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sSTT;
			}
		}
	};
});