import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import './root.scss';

import configureStore from 'store/configureStore';

import AppHeader from 'components/headers/appHeader';
import AppSideBar from 'components/sideBars/appSideBars';
import MainContent from 'components/mainContent/mainContent';

/*----------  Configuring Store  ----------*/
const store = configureStore();

/*----------  Wrapping redux Provider ----------*/
/*----------  Wrapping with Fragment results in much cleaner compiled html. ----------*/
export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<AppHeader />

					<AppSideBar />

					<MainContent />
				</Fragment>
			</Provider>
		);
	}
}
