/**
 *	Reducer: isInvoiceDialogOpen
 *	-	handles the opening of the	new invoice dialog
 */
import DialogActions from 'actions/dialogActions';

export const isInvoiceDialogOpen = (state = false, action) => {
	switch (action.type) {
		case DialogActions.TOGGLE_DIALOG: {
			return !state;
		}

		default:
			return state;
	}
};
