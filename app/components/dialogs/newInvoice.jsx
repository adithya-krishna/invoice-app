import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { Dialog } from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';

import defaultTheme from './newInvoice.scss';
import DialogHeader from 'components/headers/dialogHeader';
import CustomerDetails from 'components/mainContent/customerDetails';
import ProductDetails from 'components/mainContent/productDetails';

class NewInvoiceDialog extends Component {
	state = {
		isCustomerDetailsPage: false,
		userFormData: {
			name: '',
			phone: '',
			address: '',
			email: '',
			pincode: ''
		},
		productFormData: {
			itemName: '',
			quantity: '',
			value: ''
		}
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
						onClick: this.props.handleToggle,
						theme
				  }
		];
	};

	onCustomerDetailsSubmit = () => {
		this.setState({ isCustomerDetailsPage: false });
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

	onProductFormSubmit = () => {
		console.log('submitted');
	};

	render() {
		const { handleToggle, active, theme } = this.props;
		const {
			userFormData,
			productFormData,
			isCustomerDetailsPage
		} = this.state;

		return (
			<Dialog
				theme={theme}
				actions={this.getActionButton()}
				active
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
						productFormData={productFormData}
						handleToggle={handleToggle}
						onFieldChange={this.onFieldChange}
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
