import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import map from 'lodash/map';

import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';

import defaultTheme from './appSideBar.scss';
import NavList from 'components/lists/navList';

class AppSideBar extends PureComponent {
	render() {
		const { theme, invoices } = this.props;

		return (
			<aside className={classnames(theme.sideBarWrapper)}>
				<List selectable ripple>
					{map(invoices, (invoice, key) => {
						return (
							<ListItem
								key={`${key}`}
								theme={theme}
								itemContent={
									<NavList
										invoiceID={key}
										invoice={invoice}
									/>
								}
							/>
						);
					})}
				</List>
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	invoices: state.invoices
});

const ThemedAppSideBar = themr('AppSideBar', defaultTheme)(AppSideBar);
export default connect(mapStateToProps)(ThemedAppSideBar);
