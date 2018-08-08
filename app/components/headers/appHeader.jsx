import React, { Component, Fragment } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';

import defaultTheme from './appHeader.scss';

class AppHeader extends Component {
	render() {
		const { theme } = this.props;
		return (
			<Fragment>
				<AppBar title={'Dashboard'} flat fixed />
				<div className={classnames(theme.floatingButtonWrapper)}>
					<Button icon="add" floating accent />
				</div>
			</Fragment>
		);
	}
}

const ThemedAppHeader = themr('AppHeader', defaultTheme)(AppHeader);
export default ThemedAppHeader;
