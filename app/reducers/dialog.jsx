import DialogActions from 'actions/dialogActions';

export const isInvoiceDialogOpen = (state = false, action) => {
	switch (action.type) {
		case DialogActions.OPEN_INVOICE_DIALOG: {
			return false;
		}

		case DialogActions.CLOSE_INVOICE_DIALOG: {
			return true;
		}

		default:
			return state;
	}
};
