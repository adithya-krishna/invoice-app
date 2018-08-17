import React, { Component } from 'react';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { Card } from 'react-toolbox/lib/card';
import map from 'lodash/map';
import omit from 'lodash/omit';

import defaultTheme from './mainContent.scss';

import CardHeader from 'components/headers/cardHeader';
import InvoiceList from 'components/lists/invoiceList';
import SubTotalList from 'components/lists/subTotalList';
import { headers } from './productDetails';
import { getSetectedInvoice } from 'reducers/invoices';

const AppMainContent = ({ theme, selectedInvoiceEntry, selectedInvoice }) => {
	const { products, customer } = selectedInvoiceEntry || {};
	const productEntries = map(products, product => omit(product, ['value']));
	return (
		<article className={classnames(theme.contentWrapper)}>
			<Card theme={theme}>
				<CardHeader
					theme={theme}
					invoiceID={selectedInvoice}
					customer={customer}
				/>

				<InvoiceList headers={headers} entries={productEntries} />

				<SubTotalList />
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
