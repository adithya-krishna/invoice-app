import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
import { AppBar } from 'react-toolbox/lib/app_bar';

import defaultTheme from './appHeader.scss';
import NewInvoiceDialog from 'components/dialogs/newInvoice';
import DialogActions from 'actions/dialogActions';

const AppHeader = ({ theme, toggleDialog, isInvoiceDialogOpen }) => {
	return (
		<Fragment>
			<AppBar title={'Dashboard'} flat fixed />

			<div className={classnames(theme.floatingButtonWrapper)}>
				<Button icon={'add'} floating accent onClick={toggleDialog} />
			</div>

			<NewInvoiceDialog
				handleToggle={toggleDialog}
				active={isInvoiceDialogOpen}
			/>
		</Fragment>
	);
};

const ThemedAppHeader = themr('AppHeader', defaultTheme)(AppHeader);
export default connect(
	state => state,
	{ toggleDialog: DialogActions.toggleDialog }
)(ThemedAppHeader);
