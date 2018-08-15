import FormActions from 'actions/formActions';

const customerReducer = (state = {}, action) => {
	switch (action.type) {
		case FormActions.SAVE_INVOICE_FORM: {
			return { ...state, ...action.payload.customer };
		}
		default:
			return state;
	}
};

const productsReducer = (state = [], action) => {
	switch (action.type) {
		case FormActions.SAVE_INVOICE_FORM: {
			return [...state, ...action.payload.products];
		}
		default:
			return state;
	}
};

export const invoices = (state = {}, action) => {
	switch (action.type) {
		case FormActions.SAVE_INVOICE_FORM: {
			return {
				...state,
				[state.activeInvoiceID]: {
					customer: customerReducer(state, action),
					products: productsReducer(state, action)
				}
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
