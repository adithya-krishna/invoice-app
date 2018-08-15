import React, { Fragment } from 'react';

import FormHeader from 'components/headers/formHeader';
import InvoiceList from 'components/lists/invoiceList';

const ProductDetails = ({
	userFormData,
	products,
	productFormData,
	onFieldChange,
	onEditCustomer,
	onProductFormSubmit
}) => {
	// can be assigend locally. InvoiceList still remains a dumb component.
	const headers = ['Product Name', 'Quantity', 'Value'];

	return (
		<Fragment>
			<FormHeader
				title={'Product Details'}
				customer={userFormData}
				onEditCustomer={onEditCustomer}
			/>

			<InvoiceList
				headers={headers}
				entries={products}
				editable
				productFormData={productFormData}
				onFieldChange={onFieldChange}
				onFormSubmit={onProductFormSubmit}
			/>
		</Fragment>
	);
};

export default ProductDetails;
