import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import map from 'lodash/map';
import values from 'lodash/values';
import classnames from 'classnames';

import defaultTheme from './navList.scss';
import InvoiceListItem from './invoiceListItem';
import InvoiceItemForm from 'components/forms/invoiceItemForm';

class InvoiceList extends Component {
	render() {
		const {
			headers,
			entries,
			theme,
			editable,
			productFormData,
			onFieldChange,
			onFormSubmit
		} = this.props;
		return (
			<div className={theme.invoiceListWrapper}>
				<InvoiceListItem header items={headers} />

				{map(entries, (entry, index) => {
					return (
						<InvoiceListItem
							key={`${entry}${index}`}
							items={values(entry)}
						/>
					);
				})}

				{editable ? (
					<InvoiceItemForm
						theme={theme}
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
