/**
 *	Reducer: Invoice Reducers
 *	Selectors: getSetectedInvoice
 *	-	Contains a set of reducers to reduce the invoice state.
 *	-	Constains selectors to get selected invoice from state.
 */
import FormActions from 'actions/formActions';
import InvoiceActions from 'actions/invoiceActions';

export const invoices = (state = {}, action) => {
	switch (action.type) {
		case InvoiceActions.GET_ALL_INVOICES_COMPLETE:
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
