import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { pluralize } from 'utils';

import gridTheme from 'styles/grid.scss';
import defaultTheme from './lists.scss';

const NavList = ({
	theme,
	customerName,
	totalProducts,
	grandTotal,
	invoiceID
}) => {
	const productCountLabel = pluralize('item', totalProducts);
	const columnClasses = classnames(theme.col, theme.col__1_of_2);

	return (
		<div className={theme.listItemWrapper}>
			<div className={theme.row__no_gutter}>
				<div className={classnames(columnClasses, theme.invoiceNumber)}>
					{invoiceID}
				</div>
				<div className={classnames(columnClasses, theme.time)}>
					{'today'}
				</div>
			</div>
			<div className={theme.row__no_gutter}>
				<div className={classnames(theme.col, theme.count)}>
					{`${productCountLabel} ${
						totalProducts !== 0 ? `- ${totalProducts}` : ''
					}`}
				</div>
			</div>
			<div className={theme.row__no_gutter}>
				<div className={classnames(columnClasses, theme.name)}>
					{customerName}
				</div>
				<div className={classnames(columnClasses, theme.price)}>
					&#8377; {grandTotal}
				</div>
			</div>
		</div>
	);
};

const ThemedNavList = themr('NavList', {
	...gridTheme,
	...defaultTheme
})(NavList);
export default ThemedNavList;
