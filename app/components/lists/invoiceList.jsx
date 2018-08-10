import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './navList.scss';
import InvoiceListItem from './invoiceListItem';
import InvoiceItemForm from 'components/forms/invoiceItemForm';

class InvoiceList extends Component {
	render() {
		const {
			theme,
			editable,
			productFormData,
			onFieldChange,
			onFormSubmit
		} = this.props;
		return (
			<div className={theme.invoiceListWrapper}>
				<InvoiceListItem header />
				<InvoiceListItem />
				{editable ? (
					<InvoiceItemForm
						data={productFormData}
						onFieldChange={onFieldChange}
						onFormSubmit={onFormSubmit}
					/>
				) : null}
			</div>
		);
	}
}

const ThemedInvoiceList = themr('InvoiceList', defaultTheme)(InvoiceList);
export default ThemedInvoiceList;
