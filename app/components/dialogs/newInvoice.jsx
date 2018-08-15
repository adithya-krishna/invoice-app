import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';

import { Dialog } from 'react-toolbox/lib/dialog';

import defaultTheme from './newInvoice.scss';
import DialogHeader from 'components/headers/dialogHeader';
import CustomerDetails from 'components/mainContent/customerDetails';
import ProductDetails from 'components/mainContent/productDetails';

const initialProductFormData = {
	itemName: '',
	quantity: '',
	value: ''
};

const initialUserFormData = {
	name: '',
	phone: '',
	address: '',
	email: '',
	pincode: ''
};

class NewInvoiceDialog extends Component {
	constructor(props) {
		super(props);

		this.state = this.getInitialState();
	}

	getInitialState = () => {
		return {
			isCustomerDetailsPage: true,
			userFormData: { ...initialUserFormData },
			products: [],
			productFormData: { ...initialProductFormData }
		};
	};

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

		this.resetDialog(() => {
			saveInvoice({ customer: userFormData, products });
		});
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

	resetProductForm = () => {
		this.setState(state => {
			return {
				...state,
				productFormData: { ...initialProductFormData }
			};
		});
	};

	noop = () => {};

	resetDialog = callback => {
		this.setState(this.getInitialState(), callback || this.noop);
	};

	onProductFormSubmit = () => {
		// validate here
		this.setState(
			{ products: [...this.state.products, this.state.productFormData] },
			this.resetProductForm
		);
	};

	render() {
		const { handleToggle, active, theme, activeInvoiceID } = this.props;
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
					subtitle={`invoice id: ${activeInvoiceID}`}
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
export default ThemedNewInvoiceDialog;
