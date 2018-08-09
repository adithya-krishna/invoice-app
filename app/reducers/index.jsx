// import map from 'lodash/map';
// import { combineReducers } from 'redux';

// const counter = () => {
// 	let count = 1000;
// 	return () => {
// 		return `#INV${count++}`;
// 	};
// };
// const index = counter();

// const customer = (state = {}, action) => {
// 	switch (action.type) {
// 		case CustomerActions.EDIT_CUSTOMER:
// 		case CustomerActions.ADD_CUSTOMER: {
// 			return { ...state, ...action.payload };
// 		}
// 		default:
// 			return state;
// 	}
// };

// const invoice = (state, action) => {
// 	switch (action.type) {
// 		case InvoiceActions.ADD_INVOICE: {
// 			const {
// 				customer,
// 				invoiceNumber,
// 				createdAt,
// 				updatedAt
// 			} = action.payload;

// 			return {
// 				invoiceNumber,
// 				createdAt,
// 				updatedAt,
// 				customer: customer(customer, action),
// 				selected: false
// 			};
// 		}
// 		case InvoiceActions.TOGGLE_SELECTED: {
// 			if (action.id !== state.id) {
// 				return state;
// 			}

// 			return {
// 				...state,
// 				selected: state.selected
// 			};
// 		}
// 		default:
// 			return state;
// 	}
// };

const invoices = (state = [], action) => {
	switch (action.type) {
		// case InvoiceActions.ADD_INVOICE: {
		// 	return [...state, invoice(undefined, action)];
		// }
		// case InvoiceActions.TOGGLE_SELECTED: {
		// 	return map(state, invoice => invoice(invoice, action));
		// }
		default:
			return state;
	}
};

export default invoices;
