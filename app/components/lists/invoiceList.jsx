import React from 'react';
import { themr } from 'react-css-themr';
import map from 'lodash/map';
import values from 'lodash/values';

import defaultTheme from './lists.scss';
import InvoiceListItem from './invoiceListItem';
import InvoiceItemForm from 'components/forms/invoiceItemForm';

const InvoiceList = ({
	headers,
	entries,
	theme,
	editable,
	productFormData,
	onFieldChange,
	onFormSubmit
}) => {
	return (
		<div className={theme.invoiceListWrapper}>
			<InvoiceListItem header items={headers} />

			{map(entries, (entry, index) => {
				return (
					<InvoiceListItem
						key={`listItem-${index}`}
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
};

const ThemedInvoiceList = themr('InvoiceList', defaultTheme)(InvoiceList);
export default ThemedInvoiceList;
