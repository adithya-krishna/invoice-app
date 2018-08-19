const counter = () => {
	let count = 1050;
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
		FormActions.resetForm();
		return {
			type: FormActions.SAVE_INVOICE_FORM,
			payload: { [id]: data }
		};
	};
}

export { FormActions };
