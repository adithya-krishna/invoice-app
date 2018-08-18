import React from 'react';
import { themr } from 'react-css-themr';
import map from 'lodash/map';
import values from 'lodash/values';
import pick from 'lodash/pick';

import defaultTheme from './lists.scss';
import InvoiceListItem from './invoiceListItem';
import InvoiceItemForm from 'components/forms/invoiceItemForm';

const InvoiceList = ({
	headers,
	entries,
	entryNames,
	theme,
	editable,
	productFormData,
	onFieldChange,
	onFormSubmit
}) => {
	return (
		<div className={theme.invoiceListWrapper}>
			<InvoiceListItem header items={headers} />
			{map(entries, (item, index) => {
				const chosenEntries = entryNames
					? pick(item, entryNames)
					: item;
				return (
					<InvoiceListItem
						key={`listItem-${index}`}
						items={values(chosenEntries)}
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
