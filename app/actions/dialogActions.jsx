export default class DialogActions {
	static OPEN_INVOICE_DIALOG = 'OPEN_INVOICE_DIALOG';
	static CLOSE_INVOICE_DIALOG = 'CLOSE_INVOICE_DIALOG';

	static openDialog = () => {
		return {
			type: DialogActions.OPEN_INVOICE_DIALOG
		};
	};

	static closeDialog = () => {
		return {
			type: DialogActions.CLOSE_INVOICE_DIALOG
		};
	};
}

export { DialogActions };
