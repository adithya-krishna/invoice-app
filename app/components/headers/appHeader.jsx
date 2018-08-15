import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
import { AppBar } from 'react-toolbox/lib/app_bar';

import defaultTheme from './appHeader.scss';
import NewInvoiceDialog from 'components/dialogs/newInvoice';
import DialogActions from 'actions/dialogActions';
import FormActions from 'actions/formActions';

class AppHeader extends Component {
	handleNewInvoiceClick = () => {
		const { toggleDialog, initInvoiceForm } = this.props;
		initInvoiceForm();
		toggleDialog();
	};

	handleSaveInvoice = data => {
		const { activeInvoiceID, saveInvoice, toggleDialog } = this.props;
		saveInvoice(activeInvoiceID, data);
		toggleDialog();
	};

	render() {
		const {
			theme,
			toggleDialog,
			isInvoiceDialogOpen,
			activeInvoiceID
		} = this.props;
		return (
			<Fragment>
				<AppBar theme={theme} title={'Dashboard'} flat fixed />

				<div className={classnames(theme.floatingButtonWrapper)}>
					<Button
						theme={theme}
						icon={'add'}
						floating
						accent
						onClick={this.handleNewInvoiceClick}
					/>
				</div>

				<NewInvoiceDialog
					activeInvoiceID={activeInvoiceID}
					saveInvoice={this.handleSaveInvoice}
					handleToggle={toggleDialog}
					active={isInvoiceDialogOpen}
				/>
			</Fragment>
		);
	}
}

const ThemedAppHeader = themr('AppHeader', defaultTheme)(AppHeader);
export default connect(
	state => state,
	{
		toggleDialog: DialogActions.toggleDialog,
		initInvoiceForm: FormActions.initInvoiceForm,
		saveInvoice: FormActions.saveInvoice
	}
)(ThemedAppHeader);
