import React, { Component, Fragment } from 'react';

import AppHeader from 'components/headers/appHeader';
import AppSideBar from 'components/sideBars/appSideBars';
import MainContent from 'components/mainContent/mainContent';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<AppHeader />

				<AppSideBar />

				<MainContent />
			</Fragment>
		);
	}
}
