import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Dialog } from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';

import defaultTheme from './newInvoice.scss';
import DialogHeader from 'components/headers/dialogHeader';
import CustomerDetails from 'components/mainContent/customerDetails';
import ProductDetails from 'components/mainContent/productDetails';
import FormActions from 'actions/formActions';

const initialProductFormData = {
	itemName: '',
	quantity: '',
	value: ''
};

class NewInvoiceDialog extends Component {
	state = {
		isCustomerDetailsPage: true,
		userFormData: {
			name: '',
			phone: '',
			address: '',
			email: '',
			pincode: ''
		},
		products: [],
		productFormData: { ...initialProductFormData }
	};

	componentDidMount() {
		const { initInvoiceForm } = this.props;
		initInvoiceForm();
	}

	getActionButton = () => {
		const { isCustomerDetailsPage } = this.state;
		const { theme } = this.props;
		return [
			isCustomerDetailsPage
				? {
						label: 'Proceed',
						primary: true,
						raised: true,
						onClick: this.onCustomerDetailsSubmit,
						theme
				  }
				: {
						label: 'Save',
						primary: true,
						raised: true,
						onClick: this.onProductDetailsSubmit,
						theme
				  }
		];
	};

	onCustomerDetailsSubmit = () => {
		this.setState({ isCustomerDetailsPage: false });
	};

	onProductDetailsSubmit = () => {
		const { userFormData, products } = this.state;
		const { saveInvoice } = this.props;

		saveInvoice({ customer: userFormData, products });
		this.setState({ isCustomerDetailsPage: true });
	};

	onEditCustomer = () => {
		this.setState({ isCustomerDetailsPage: true });
	};

	onFieldChange = e => {
		const { name, value } = e.target;
		const { userFormData, productFormData } = this.state;

		if (userFormData.hasOwnProperty(name)) {
			this.setState({
				userFormData: { ...userFormData, [name]: value }
			});
		} else {
			this.setState({
				productFormData: { ...productFormData, [name]: value }
			});
		}
	};

	resetProductsForm = () => {
		this.setState(state => {
			return {
				...state,
				productFormData: { ...initialProductFormData }
			};
		});
	};

	onProductFormSubmit = () => {
		// validate here
		this.setState(
			{ products: [...this.state.products, this.state.productFormData] },
			this.resetProductsForm
		);
	};

	render() {
		const { handleToggle, active, theme } = this.props;
		const {
			userFormData,
			productFormData,
			products,
			isCustomerDetailsPage
		} = this.state;

		return (
			<Dialog
				theme={theme}
				actions={this.getActionButton()}
				active={active}
				onEscKeyDown={handleToggle}
				onOverlayClick={handleToggle}
			>
				<DialogHeader
					title={'Create New Invoice'}
					subtitle={'order no: 1234'}
					closeIcon
					onCloseClick={handleToggle}
				/>

				{isCustomerDetailsPage ? (
					<CustomerDetails
						userFormData={userFormData}
						handleToggle={handleToggle}
						onFieldChange={this.onFieldChange}
					/>
				) : (
					<ProductDetails
						userFormData={userFormData}
						products={products}
						productFormData={productFormData}
						handleToggle={handleToggle}
						onEditCustomer={this.onEditCustomer}
						onFieldChange={this.onFieldChange}
						onProductFormSubmit={this.onProductFormSubmit}
					/>
				)}
			</Dialog>
		);
	}
}

const ThemedNewInvoiceDialog = themr('NewInvoiceDialog', defaultTheme)(
	NewInvoiceDialog
);

// returning whole state in map state to props.
export default connect(
	null,
	{
		saveInvoice: FormActions.saveInvoice,
		initInvoiceForm: FormActions.initInvoiceForm
	}
)(ThemedNewInvoiceDialog);
