import React, { Component, Fragment } from 'react';

import FormHeader from 'components/headers/formHeader';
import InvoiceList from 'components/lists/invoiceList';

class ProductDetails extends Component {
	render() {
		const {
			userFormData,
			productFormData,
			onFieldChange,
			onEditCustomer,
			onProductFormSubmit
		} = this.props;

		return (
			<Fragment>
				<FormHeader
					title={'Product Details'}
					customer={userFormData}
					onEditCustomer={onEditCustomer}
				/>
				<InvoiceList
					editable
					productFormData={productFormData}
					onFieldChange={onFieldChange}
					onFormSubmit={onProductFormSubmit}
				/>
			</Fragment>
		);
	}
}

export default ProductDetails;
