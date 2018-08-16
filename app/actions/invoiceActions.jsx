class InvoiceActions {
	static SET_SELECTED_INVOICE = 'SET_SELECTED_INVOICE';

	static setSelectedInvoice = invoiceID => {
		return {
			type: InvoiceActions.SET_SELECTED_INVOICE,
			payload: { id: invoiceID }
		};
	};
}

export default InvoiceActions;
