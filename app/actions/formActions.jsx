import map from 'lodash/map';
import { formatMoney } from 'utils';

const counter = () => {
	let count = 1000;
	return () => {
		return `INV${count++}`;
	};
};
const index = counter();

export default class FormActions {
	static INIT_INVOICE_FORM = 'INIT_INVOICE_FORM';
	static SAVE_INVOICE_FORM = 'SAVE_INVOICE_FORM';
	static RESET_FORM = 'RESET_FORM';

	static initInvoiceForm = () => {
		return {
			type: FormActions.INIT_INVOICE_FORM,
			payload: { id: index() }
		};
	};

	static resetForm = () => {
		return {
			type: FormActions.RESET_FORM
		};
	};

	static saveInvoice = (id, data) => {
		const parsedData = {
			...data,
			products: map(data.products, product => ({
				...product,
				formattedValue: formatMoney(product.value)
			}))
		};
		FormActions.resetForm();
		return {
			type: FormActions.SAVE_INVOICE_FORM,
			payload: { [id]: parsedData }
		};
	};
}

export { FormActions };
