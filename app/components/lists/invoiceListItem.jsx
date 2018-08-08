import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './navList.scss';

class InvoiceListItem extends Component {
	render() {
		const { theme, header } = this.props;
		return (
			<div
				className={classnames(theme.listItem, {
					[theme.invoiceHeader]: header,
					[theme.invoiceBody]: !header
				})}
			>
				<div className={theme.row}>
					<div className={theme.element}>#INV1122</div>
					<div className={theme.element}>11:35 am - today</div>
					<div className={theme.element}>11:35 am - today</div>
				</div>
			</div>
		);
	}
}

const ThemedInvoiceListItem = themr('InvoiceListItem', defaultTheme)(
	InvoiceListItem
);
export default ThemedInvoiceListItem;
