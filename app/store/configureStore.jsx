import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
	const store = createStore(
		rootReducer,
		{
			invoices: {
				INV1000: {
					customer: {
						name: 'Adithya Krishna',
						phone: '08884403080',
						address:
							'#37, Flat No T2, Sai Senmar Res., 1st Cross, Chikka Banaswadi',
						email: 'adi2348492@gmail.com',
						pincode: '560033'
					},
					products: [
						{
							itemName: 'hello',
							quantity: '1',
							value: '1'
						},
						{
							itemName: 'hello',
							quantity: '3',
							value: '1'
						}
					]
				}
			},
			selectedInvoice: 'INV1000'
		},
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
