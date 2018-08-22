/**
 *	Reducer: RootReducer
 *	-	combines all reducers to feed into the store.
 */
import { combineReducers } from 'redux';

import { invoices, activeInvoiceID, selectedInvoice } from './invoices';
import { isInvoiceDialogOpen } from './dialog';

const rootReducer = combineReducers({
	invoices,
	activeInvoiceID,
	isInvoiceDialogOpen,
	selectedInvoice
});

export default rootReducer;
