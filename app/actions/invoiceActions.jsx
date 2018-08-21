import axios from 'axios';
import {
	randomIntFromInterval,
	handleTotalCalculation,
	formatMoney
} from 'utils';
import reduce from 'lodash/reduce';
import map from 'lodash/map';

const BASE_URL = 'http://localhost:5000';

class InvoiceActions {
	static SET_SELECTED_INVOICE = 'SET_SELECTED_INVOICE';
	static GET_ALL_INVOICES_START = 'GET_ALL_INVOICES_START';
	static GET_ALL_INVOICES_COMPLETE = 'GET_ALL_INVOICES_COMPLETE';

	static getAllInvoices = () => {
		return async dispatch => {
			dispatch({
				type: InvoiceActions.GET_ALL_INVOICES_START
			});
			try {
				const response = await axios.get(`${BASE_URL}/getAllInvoices`);
				const invoices = reduce(
					response.data,
					(result, dat) => {
						const tax = randomIntFromInterval(5, 28);
						const discount = randomIntFromInterval(0, 30);

						return {
							...result,
							[dat.id]: {
								...dat,
								products: map(dat.products, product => ({
									...product,
									formattedValue: formatMoney(product.value),
									formattedQuantity: formatMoney(
										product.quantity
									)
								})),
								tax,
								discount,
								...handleTotalCalculation(
									dat.products,
									tax,
									discount
								)
							}
						};
					},
					{}
				);
				dispatch({
					type: InvoiceActions.GET_ALL_INVOICES_COMPLETE,
					payload: invoices
				});
			} catch (error) {
				console.error(error);
			}
		};
	};

	static setSelectedInvoice = invoiceID => {
		return {
			type: InvoiceActions.SET_SELECTED_INVOICE,
			payload: { id: invoiceID }
		};
	};
}

export default InvoiceActions;
