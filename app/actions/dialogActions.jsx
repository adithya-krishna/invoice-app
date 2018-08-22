/**
 *	Action Creator: DialogActions
 *	-	All Action Creators within the app have this signature.
		This helps in localising Code.
 */
export default class DialogActions {
	static TOGGLE_DIALOG = 'TOGGLE_DIALOG';

	static toggleDialog = () => {
		return {
			type: DialogActions.TOGGLE_DIALOG
		};
	};
}

export { DialogActions };
