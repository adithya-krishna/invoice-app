/**
 *	Store Configuration
 *	-	Composing with the redux store with root reducers.
 *	-	Redux dev tools is added here.
 *	-	To simulate local dummy data, uncomment initail data and feed it to "initialStore.invoices"
		This can be used to simulate offline data.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
// import { initialData } from '.test.json';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
	invoices: {},
	activeInvoiceID: '',
	isInvoiceDialogOpen: false,
	selectedInvoice: ''
};
export default function configureStore() {
	const store = createStore(
		rootReducer,
		initialStore,
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
