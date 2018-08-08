import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './navList.scss';
import InvoiceListItem from './invoiceListItem';

class InvoiceList extends Component {
	render() {
		const { theme } = this.props;
		return (
			<div className={theme.invoiceListWrapper}>
				<InvoiceListItem header />
				<InvoiceListItem />
			</div>
		);
	}
}

const ThemedInvoiceList = themr('InvoiceList', defaultTheme)(InvoiceList);
export default ThemedInvoiceList;
