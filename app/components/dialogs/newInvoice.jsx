import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';

import { Dialog } from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';

import defaultTheme from './newInvoice.scss';
import DialogHeader from 'components/headers/dialogHeader';
import CustomerDetails from 'components/mainContent/customerDetails';
import ProductDetails from 'components/mainContent/productDetails';

import { Navigation } from 'react-toolbox/lib/navigation';

const NavigationFooter = ({ onClickHandler, rightButtonLabel, theme }) => (
	<Navigation type="horizontal" theme={theme} className={theme.navigation}>
		<Button
			label={rightButtonLabel}
			primary
			raised
			onClick={onClickHandler}
			theme={theme}
		/>
	</Navigation>
);

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

		const rightButtonClickHandler = isCustomerDetailsPage
			? this.onCustomerDetailsSubmit
			: this.onProductDetailsSubmit;
		const rightButtonLabel = isCustomerDetailsPage ? 'Proceed' : 'Save';

		return (
			<Dialog
				theme={theme}
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
						theme={theme}
						onProductFormSubmit={this.onProductFormSubmit}
					/>
				)}

				<NavigationFooter
					onClickHandler={this.onCustomerDetailsSubmit}
					rightButtonLabel={rightButtonLabel}
					theme={theme}
					onClickHandler={rightButtonClickHandler}
				/>
			</Dialog>
		);
	}
}

const ThemedNewInvoiceDialog = themr('NewInvoiceDialog', defaultTheme)(
	NewInvoiceDialog
);
export default ThemedNewInvoiceDialog;
