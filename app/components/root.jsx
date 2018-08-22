import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import './root.scss';

import configureStore from 'store/configureStore';

/*----------  grouping all components that are conatiners ----------*/
/*----------  This patteren is questionable. ----------*/
/*----------  But I have chosen this pattern to improve readability ----------*/
import AppHeader from 'containers/appHeader';
import AppSideBar from 'containers/appSideBars';
import MainContent from 'containers/mainContent';

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
