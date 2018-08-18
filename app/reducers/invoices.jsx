import FormActions from 'actions/formActions';
import InvoiceActions from 'actions/invoiceActions';

export const invoices = (state = {}, action) => {
	switch (action.type) {
		case FormActions.SAVE_INVOICE_FORM: {
			return {
				...state,
				...action.payload
			};
		}
		default:
			return state;
	}
};

export const activeInvoiceID = (state = null, action) => {
	switch (action.type) {
		case FormActions.INIT_INVOICE_FORM: {
			return action.payload.id;
		}

		case FormActions.RESET_FORM: {
			return null;
		}

		default:
			return state;
	}
};

export const selectedInvoice = (state = null, action) => {
	switch (action.type) {
		case InvoiceActions.SET_SELECTED_INVOICE: {
			return action.payload.id;
		}

		default:
			return state;
	}
};

//selectors
export const getSetectedInvoice = state => {
	const { selectedInvoice } = state;
	return state.invoices[selectedInvoice];
};
