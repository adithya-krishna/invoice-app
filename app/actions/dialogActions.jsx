export default class DialogActions {
	static TOGGLE_DIALOG = 'TOGGLE_DIALOG';

	static toggleDialog = () => {
		return {
			type: DialogActions.TOGGLE_DIALOG
		};
	};
}

export { DialogActions };
