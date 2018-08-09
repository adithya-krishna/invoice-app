import React, { Component } from 'react';

import { Dialog } from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';

import UserForm from 'components/forms/userForm';
import DialogHeader from 'components/headers/dialogHeader';

export default class NewInvoiceDialog extends Component {
	actions = [
		{ label: 'Cancel', onClick: this.props.handleToggle },
		{ label: 'Save', onClick: this.props.handleToggle }
	];

	render() {
		const { handleToggle, active } = this.props;
		return (
			<div>
				<Button label="Show my dialog" onClick={handleToggle} />
				<Dialog
					actions={this.actions}
					active={active}
					onEscKeyDown={handleToggle}
					onOverlayClick={handleToggle}
				>
					<DialogHeader
						title={'Create New Invoice'}
						subtitle={'order no: 1234'}
						closeIcon
						onCloseClick={handleToggle}
					/>
					<UserForm />
				</Dialog>
			</div>
		);
	}
}
