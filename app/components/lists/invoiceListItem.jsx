import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import map from 'lodash/map';
import classnames from 'classnames';

import defaultTheme from './lists.scss';
import gridTheme from 'styles/grid.scss';

class InvoiceListItem extends Component {
	render() {
		const { theme, header, items } = this.props;
		return (
			<div
				className={classnames(theme.row, {
					[theme.invoiceHeader]: header,
					[theme.invoiceBody]: !header
				})}
			>
				{map(items, (item, itemIndex) => (
					<div
						key={`${item}${itemIndex}`}
						className={classnames(
							theme.col,
							{ [theme.col__2_of_4]: itemIndex === 0 },
							{ [theme.col__1_of_4]: itemIndex !== 0 }
						)}
					>
						{item}
					</div>
				))}
			</div>
		);
	}
}

const ThemedInvoiceListItem = themr('InvoiceListItem', {
	...defaultTheme,
	...gridTheme
})(InvoiceListItem);
export default ThemedInvoiceListItem;
