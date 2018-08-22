import React, { Component, Fragment } from 'react';
import { themr } from 'react-css-themr';
import reduce from 'lodash/reduce';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';

import { Dialog } from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Snackbar } from 'react-toolbox/lib/snackbar';

import defaultTheme from './newInvoice.scss';
import DialogHeader from 'components/headers/dialogHeader';
import CustomerDetails from 'components/mainContent/customerDetails';
import ProductDetails from 'components/mainContent/productDetails';
import { InputField } from 'components/forms/field';
import { formatMoney, toNumber } from 'utils';

/*----------  Components are only used within this component, so we declare it here.  ----------*/
/*----------  Move to separate file if used elsewhere.  ----------*/
const Statistic = ({ theme, label, value, prefix = false, suffix = false }) => (
	<div className={theme.statistic}>
		<div className={theme.label}>{label}</div>
		<div className={theme.value}>
			{prefix ? <span>&#8377;</span> : null}
			{value}
			{suffix ? <span>%</span> : null}
		</div>
	</div>
);

const NavigationFooter = ({
	theme,
	rightButtonLabel,
	isCustomerDetailsPage,
	tax,
	discount,
	onClickHandler,
	onFieldChange,
	subTotal,
	grandTotal
}) => {
	return (
		<Fragment>
			{isCustomerDetailsPage ? null : (
				<div className={theme.footerFormWrapper}>
					<div className={theme.left}>
						<InputField
							theme={theme}
							id={'tax'}
							name={'tax'}
							placeholder={'Tax'}
							value={tax}
							onFieldChange={onFieldChange}
						/>
						<InputField
							theme={theme}
							id={'discount'}
							name={'discount'}
							placeholder={'Discount'}
							value={discount}
							onFieldChange={onFieldChange}
						/>
					</div>
					<div className={theme.right}>
						<div className={theme.label}>Sub Total</div>
						<div className={theme.value}>&#8377; {subTotal}</div>
					</div>
				</div>
			)}
			<Navigation
				type="horizontal"
				theme={theme}
				className={theme.navigation}
			>
				<div className={theme.left}>
					{isCustomerDetailsPage ? null : (
						<Fragment>
							<Statistic
								suffix
								theme={theme}
								label={'Tax'}
								value={formatMoney(tax)}
							/>
							<Statistic
								suffix
								theme={theme}
								label={'Discount'}
								value={formatMoney(discount)}
							/>
						</Fragment>
					)}
				</div>
				<div className={theme.right}>
					{isCustomerDetailsPage ? null : (
						<Statistic
							prefix
							theme={theme}
							label={'Grand Total'}
							value={grandTotal}
						/>
					)}
					<Button
						label={rightButtonLabel}
						primary
						raised
						onClick={onClickHandler}
						theme={theme}
					/>
				</div>
			</Navigation>
		</Fragment>
	);
};

const initialProductFormData = {
	itemName: '',
	quantity: '',
	value: '',
	formattedQuantity: '',
	formattedValue: ''
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
			showSnackbar: false,
			snackbarLabel: null,
			userFormData: { ...initialUserFormData },
			products: [],
			productFormData: { ...initialProductFormData },
			tax: '',
			discount: '',
			subTotal: 0,
			grandTotal: 0,
			taxAmount: 0,
			discountAmount: 0
		};
	};

	onCustomerDetailsSubmit = () => {
		this.setState({ isCustomerDetailsPage: false });
	};

	onProductDetailsSubmit = () => {
		const {
			userFormData,
			productFormData,
			products,
			grandTotal,
			subTotal,
			taxAmount,
			discountAmount,
			tax,
			discount
		} = this.state;
		const { saveInvoice, activeInvoiceID } = this.props;

		let passThroughFlag = true;
		forEach(productFormData, entry => {
			if (passThroughFlag) {
				passThroughFlag = isEmpty(entry);
			}
		});

		if (!products.length && passThroughFlag) {
			this.toggleSnackbar('Please add some products first');
		} else {
			if (!passThroughFlag) {
				this.toggleSnackbar('Please submit the product first');
			} else {
				this.resetDialog(() => {
					saveInvoice({
						invoiceID: activeInvoiceID,
						customer: userFormData,
						products,
						grandTotal,
						subTotal,
						tax: formatMoney(tax),
						discount: formatMoney(discount),
						taxAmount,
						discountAmount
					});
				});
			}
		}
	};

	onEditCustomer = () => {
		this.setState({ isCustomerDetailsPage: true });
	};

	toggleSnackbar = label => {
		const { showSnackbar, snackbarLabel } = this.state;
		this.setState({
			showSnackbar: !showSnackbar,
			snackbarLabel: isEmpty(snackbarLabel) ? label : null
		});
	};

	handleTotalCalculation = (items, tax, discount) => {
		let taxMultiplier = toNumber(tax) / 100;
		let discountMultiplier = toNumber(discount) / 100;
		if (taxMultiplier > 1) {
			taxMultiplier = 0;
		}
		if (discountMultiplier > 1) {
			discountMultiplier = 0;
		}

		let subTotal = reduce(
			items,
			(result, item) =>
				result + toNumber(item.quantity) * toNumber(item.value),
			0
		);
		const taxAmount = taxMultiplier > 0 ? taxMultiplier * subTotal : 0;
		const discountAmount =
			discountMultiplier > 0 ? discountMultiplier * subTotal : 0;
		const grandTotal = subTotal + taxAmount - discountAmount;
		return {
			grandTotal: formatMoney(grandTotal),
			subTotal: formatMoney(subTotal),
			taxAmount: formatMoney(taxAmount),
			discountAmount: formatMoney(discountAmount)
		};
	};

	onFieldChange = e => {
		const { name, value } = e.target;
		const { userFormData } = this.state;

		if (userFormData.hasOwnProperty(name)) {
			this.setState({
				userFormData: { ...userFormData, [name]: value }
			});
		} else {
			this.setState(state => {
				const { productFormData, products, tax, discount } = state;
				switch (name) {
					case 'itemName': {
						return {
							...state,
							productFormData: {
								...productFormData,
								[name]: value
							}
						};
					}
					case 'tax':
					case 'discount': {
						const updatedProducts = [
							...products,
							{ ...productFormData }
						];
						const derivedTotals = this.handleTotalCalculation(
							updatedProducts,
							name === 'tax' ? value : tax,
							name === 'discount' ? value : discount
						);
						return { ...state, ...derivedTotals, [name]: value };
					}
					case 'quantity':
					case 'value': {
						const updatedProducts = [
							...products,
							{ ...productFormData, [name]: value }
						];
						const derivedTotals = this.handleTotalCalculation(
							updatedProducts,
							tax,
							discount
						);
						return {
							...state,
							...derivedTotals,
							productFormData: {
								...productFormData,
								[name]: value
							}
						};
					}

					default:
						return state;
				}
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
		const { products, productFormData } = this.state;

		let incompleteFormFlag =
			isEmpty(productFormData.itemName) ||
			isEmpty(productFormData.quantity) ||
			isEmpty(productFormData.value);

		if (incompleteFormFlag) {
			this.toggleSnackbar('Please fill up the form before submitting.');
		} else {
			const updatedProductFormData = {
				...productFormData,
				formattedQuantity: formatMoney(productFormData.quantity),
				formattedValue: formatMoney(productFormData.value)
			};
			this.setState(
				{ products: [...products, updatedProductFormData] },
				this.resetProductForm
			);
		}
	};

	render() {
		const { handleToggle, active, theme, activeInvoiceID } = this.props;
		const {
			userFormData,
			productFormData,
			products,
			isCustomerDetailsPage,
			tax,
			discount,
			grandTotal,
			subTotal,
			showSnackbar,
			snackbarLabel
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
						onSkipClick={this.onCustomerDetailsSubmit}
					/>
				) : (
					<ProductDetails
						theme={theme}
						userFormData={userFormData}
						products={products}
						productFormData={productFormData}
						handleToggle={handleToggle}
						onEditCustomer={this.onEditCustomer}
						onFieldChange={this.onFieldChange}
						onProductFormSubmit={this.onProductFormSubmit}
					/>
				)}

				<Snackbar
					active={showSnackbar}
					action="Nice"
					label={snackbarLabel}
					timeout={4000}
					onTimeout={this.toggleSnackbar}
				/>

				<NavigationFooter
					theme={theme}
					rightButtonLabel={rightButtonLabel}
					tax={tax}
					discount={discount}
					isCustomerDetailsPage={isCustomerDetailsPage}
					onClickHandler={rightButtonClickHandler}
					onFieldChange={this.onFieldChange}
					subTotal={subTotal}
					grandTotal={grandTotal}
				/>
			</Dialog>
		);
	}
}

const ThemedNewInvoiceDialog = themr('NewInvoiceDialog', defaultTheme)(
	NewInvoiceDialog
);
export default ThemedNewInvoiceDialog;
