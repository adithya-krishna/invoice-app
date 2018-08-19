import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduce from 'lodash/reduce';

import rootReducer from 'reducers';
import data from './test.json';
import { toNumber, formatMoney } from 'utils';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const handleTotalCalculation = (items, tax, discount) => {
	let taxMultiplier = toNumber(tax) / 100;
	let discountMultiplier = toNumber(discount) / 100;
	if (taxMultiplier > 1) {
		taxMultiplier = 0;
	}
	if (discountMultiplier > 1) {
		discountMultiplier = 0;
	}

	let subTotal = reduce(
		items,
		(result, item) =>
			result + toNumber(item.quantity) * toNumber(item.value),
		0
	);
	const taxAmount = taxMultiplier > 0 ? taxMultiplier * subTotal : 0;
	const discountAmount =
		discountMultiplier > 0 ? discountMultiplier * subTotal : 0;
	const grandTotal = subTotal + taxAmount - discountAmount;

	return {
		grandTotal: formatMoney(grandTotal),
		subTotal: formatMoney(subTotal),
		taxAmount: formatMoney(taxAmount),
		discountAmount: formatMoney(discountAmount)
	};
};

const randomIntFromInterval = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

const invoices = data.reduce((result, dat) => {
	const tax = randomIntFromInterval(5, 28);
	const discount = randomIntFromInterval(0, 30);

	return {
		...result,
		[dat.id]: {
			...dat,
			tax,
			discount,
			...handleTotalCalculation(dat.products, tax, discount)
		}
	};
}, {});

const initialStore = {
	invoices: invoices,
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
