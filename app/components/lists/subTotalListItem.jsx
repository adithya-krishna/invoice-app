import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './navList.scss';

class SubTotalListItem extends Component {
	render() {
		const { theme, grandTotal } = this.props;
		return (
			<div
				className={classnames(theme.listItem, {
					[theme.subTotalGrandTotal]: grandTotal,
					[theme.subTotalBody]: !grandTotal
				})}
			>
				<div className={theme.row}>
					<div className={theme.element} />
					<div className={theme.element}>11:35 am - today</div>
					<div className={theme.element}>11:35 am - today</div>
				</div>
			</div>
		);
	}
}

const ThemedSubTotalListItem = themr('SubTotalListItem', defaultTheme)(
	SubTotalListItem
);
export default ThemedSubTotalListItem;