import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { Card } from 'react-toolbox/lib/card';

import defaultTheme from './mainContent.scss';

import CardHeader from 'components/headers/cardHeader';
import InvoiceList from 'components/lists/invoiceList';
import SubTotalList from 'components/lists/subTotalList';
import { headers, entryNames } from 'components/mainContent/productDetails';
import { getSetectedInvoice } from 'reducers/invoices';

const AppMainContent = ({ theme, selectedInvoiceEntry, selectedInvoice }) => {
	const { products, customer } = selectedInvoiceEntry || {};

	return (
		<article className={classnames(theme.contentWrapper)}>
			<Card theme={theme}>
				{!products && !customer ? (
					<div>Please select an invoice</div>
				) : (
					<Fragment>
						<CardHeader
							theme={theme}
							invoiceID={selectedInvoice}
							customer={customer}
						/>

						<InvoiceList
							headers={headers}
							entries={products}
							entryNames={entryNames}
						/>

						<SubTotalList invoice={selectedInvoiceEntry} />
					</Fragment>
				)}
			</Card>
		</article>
	);
};

const mapStateToProps = state => {
	return {
		selectedInvoice: state.selectedInvoice,
		selectedInvoiceEntry: getSetectedInvoice(state)
	};
};

const ThemedAppMainContent = themr('AppMainContent', defaultTheme)(
	AppMainContent
);
export default connect(mapStateToProps)(ThemedAppMainContent);
