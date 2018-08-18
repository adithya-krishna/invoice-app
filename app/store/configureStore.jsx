import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialStore = {
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
					value: '1000',
					formattedQuantity: '1.00',
					formattedValue: '1,000.00'
				},
				{
					itemName: 'hello',
					quantity: '3',
					value: '180',
					formattedQuantity: '3.00',
					formattedValue: '180.00'
				}
			],
			grandTotal: '1,617.00',
			subTotal: '1,540.00',
			tax: '10.00',
			discount: '5.00',
			taxAmount: '154.00',
			discountAmount: '77.00'
		},
		INV1002: {
			customer: {
				name: 'Krishna Kumar',
				phone: '9880275768',
				address: '#37, bangalore',
				email: 'krish857@gmail.com',
				pincode: '560033'
			},
			products: [
				{
					itemName: 'Milk',
					quantity: '4',
					value: '18',
					formattedQuantity: '4.00',
					formattedValue: '18.00'
				},
				{
					itemName: 'Cigarettes',
					quantity: '10',
					value: '15',
					formattedQuantity: '10.00',
					formattedValue: '15.00'
				},
				{
					itemName: 'Rice',
					quantity: '1',
					value: '250',
					formattedQuantity: '1.00',
					formattedValue: '250.00'
				}
			],
			grandTotal: '533.36',
			subTotal: '472.00',
			tax: '18.00',
			discount: '5.00',
			taxAmount: '84.96',
			discountAmount: '23.60'
		}
	},
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
