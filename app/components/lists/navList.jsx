import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './navList.scss';

class NavList extends Component {
	render() {
		const { theme } = this.props;
		return (
			<div className={theme.listItem}>
				<div className={theme.row}>
					<div
						className={classnames(
							theme.element,
							theme.invoiceNumber
						)}
					>
						#INV1122
					</div>
					<div className={classnames(theme.element, theme.time)}>
						11:35 am - today
					</div>
				</div>
				<div className={theme.row}>
					<div className={classnames(theme.element, theme.name)}>
						Items - 05
					</div>
				</div>
				<div className={theme.row}>
					<div className={classnames(theme.element, theme.name)}>
						John Doe
					</div>
					<div className={classnames(theme.element, theme.price)}>
						3,500/-
					</div>
				</div>
			</div>
		);
	}
}

const ThemedNavList = themr('NavList', defaultTheme)(NavList);
export default ThemedNavList;
