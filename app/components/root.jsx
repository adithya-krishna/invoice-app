import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './root.scss';

import configureStore from 'store/configureStore';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import App from 'app';

/*----------  Configuring Store  ----------*/
const store = configureStore();

/*----------  Wrapping redux Provider ----------*/
class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={{}}>
					<App />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default Root;
