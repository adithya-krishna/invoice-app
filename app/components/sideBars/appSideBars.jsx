import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import map from 'lodash/map';

import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';

import defaultTheme from './appSideBar.scss';
import NavList from 'components/lists/navList';

import InvoiceActions from 'actions/invoiceActions';

class AppSideBar extends PureComponent {
	onClickHandler = invoiceID => {
		this.props.setSelectedInvoice(invoiceID);
	};

	render() {
		const { theme, invoices, selectedInvoice } = this.props;

		return (
			<aside className={classnames(theme.sideBarWrapper)}>
				<List selectable ripple>
					{map(invoices, (invoice, key) => {
						// this is re bound on every update. This could be a costly task.
						// However, since performance wouldn't be effected to a greate extent
						// we use this as a work around.
						const boundClickHandler = this.onClickHandler.bind(
							this,
							key
						);
						const isActiveClass = classnames({
							[theme.listItemActive]: selectedInvoice === key
						});

						return (
							<ListItem
								onClick={boundClickHandler}
								key={`${key}`}
								theme={theme}
								className={isActiveClass}
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
	invoices: state.invoices,
	selectedInvoice: state.selectedInvoice
});

const ThemedAppSideBar = themr('AppSideBar', defaultTheme)(AppSideBar);
export default connect(
	mapStateToProps,
	{ setSelectedInvoice: InvoiceActions.setSelectedInvoice }
)(ThemedAppSideBar);
