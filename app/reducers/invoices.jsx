import FormActions from 'actions/formActions';

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
