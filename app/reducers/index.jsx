// import map from 'lodash/map';
import { combineReducers } from 'redux';

import { invoices, activeInvoiceID } from './invoices';
import { isInvoiceDialogOpen } from './dialog';

const rootReducer = combineReducers({
	invoices,
	activeInvoiceID,
	isInvoiceDialogOpen
});

export default rootReducer;
