import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { pluralize } from 'utils';

import gridTheme from 'styles/grid.scss';

const NavList = ({ theme, invoice: { products, customer }, invoiceID }) => {
	const totalProducts = products.length;
	const productCountLabel = pluralize('item', totalProducts);

	return (
		<div className={theme.listItem}>
			<div className={theme.row}>
				<div className={classnames(theme.col, theme.invoiceNumber)}>
					{invoiceID}
				</div>
				<div className={classnames(theme.col, theme.time)}>
					{'today'}
				</div>
			</div>
			<div className={theme.row}>
				<div className={classnames(theme.col, theme.name)}>
					{`${productCountLabel} ${
						totalProducts !== 0 ? `- ${totalProducts}` : ''
					}`}
				</div>
			</div>
			<div className={theme.row}>
				<div className={classnames(theme.col, theme.name)}>
					{customer.name}
				</div>
				<div className={classnames(theme.col, theme.price)}>
					3,500/-
				</div>
			</div>
		</div>
	);
};

const ThemedNavList = themr('NavList', gridTheme)(NavList);
export default ThemedNavList;
