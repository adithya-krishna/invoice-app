import React, { Component, Fragment } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
import { AppBar } from 'react-toolbox/lib/app_bar';

import defaultTheme from './appHeader.scss';
import NewInvoiceDialog from 'components/dialogs/newInvoice';

class AppHeader extends Component {
	state = {
		active: false
	};

	handleToggle = () => {
		this.setState({ active: !this.state.active });
	};

	render() {
		const { theme } = this.props;
		return (
			<Fragment>
				<AppBar title={'Dashboard'} flat fixed />

				<div className={classnames(theme.floatingButtonWrapper)}>
					<Button
						icon={'add'}
						floating
						accent
						onClick={this.handleToggle}
					/>
				</div>

				<NewInvoiceDialog
					handleToggle={this.handleToggle}
					active={this.state.active}
				/>
			</Fragment>
		);
	}
}

const ThemedAppHeader = themr('AppHeader', defaultTheme)(AppHeader);
export default ThemedAppHeader;
