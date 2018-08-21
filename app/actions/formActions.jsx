import axios from 'axios';
import { BASE_URL } from 'config';
import { generateRandomId } from 'utils';

export default class FormActions {
	static INIT_INVOICE_FORM = 'INIT_INVOICE_FORM';
	static SAVE_INVOICE_FORM = 'SAVE_INVOICE_FORM';
	static RESET_FORM = 'RESET_FORM';

	static initInvoiceForm = () => {
		return {
			type: FormActions.INIT_INVOICE_FORM,
			payload: { id: generateRandomId() }
		};
	};

	static resetForm = () => {
		return {
			type: FormActions.RESET_FORM
		};
	};

	static saveInvoice = data => {
		FormActions.resetForm();
		return async dispatch => {
			const response = await axios.post(`${BASE_URL}/save-invoice`, data);
			const { data: savedInvoice } = response.data;
			dispatch({
				type: FormActions.SAVE_INVOICE_FORM,
				payload: { [savedInvoice.invoiceID]: savedInvoice }
			});
		};
	};
}

export { FormActions };
