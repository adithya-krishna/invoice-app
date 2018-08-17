import React, { Fragment } from 'react';

import FormHeader from 'components/headers/formHeader';
import InvoiceList from 'components/lists/invoiceList';

// can be assigend locally. InvoiceList still remains a dumb component.
export const headers = [
	'Product Name',
	'Quantity',
	<span>Value - &#8377;</span>
];

const ProductDetails = ({
	theme,
	userFormData,
	products,
	productFormData,
	onFieldChange,
	onEditCustomer,
	onProductFormSubmit
}) => {
	return (
		<Fragment>
			<FormHeader
				title={'Product Details'}
				customer={userFormData}
				onEditCustomer={onEditCustomer}
			/>

			<InvoiceList
				theme={theme}
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
