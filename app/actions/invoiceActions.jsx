import axios from 'axios';
import { BASE_URL } from 'config';

class InvoiceActions {
	static SET_SELECTED_INVOICE = 'SET_SELECTED_INVOICE';
	static GET_ALL_INVOICES_START = 'GET_ALL_INVOICES_START';
	static GET_ALL_INVOICES_COMPLETE = 'GET_ALL_INVOICES_COMPLETE';

	static getAllInvoices = () => {
		return async dispatch => {
			dispatch({
				type: InvoiceActions.GET_ALL_INVOICES_START
			});
			try {
				const response = await axios.get(`${BASE_URL}/all-invoices`);
				dispatch({
					type: InvoiceActions.GET_ALL_INVOICES_COMPLETE,
					payload: response.data
				});
			} catch (error) {
				console.error(error);
			}
		};
	};

	static setSelectedInvoice = invoiceID => {
		return {
			type: InvoiceActions.SET_SELECTED_INVOICE,
			payload: { id: invoiceID }
		};
	};
}

export default InvoiceActions;
