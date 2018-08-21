import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
	invoices: {},
	activeInvoiceID: 'INV1002',
	isInvoiceDialogOpen: false,
	selectedInvoice: 'INV1002'
};
export default function configureStore() {
	const store = createStore(
		rootReducer,
		initialStore,
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
