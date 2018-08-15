import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './root.scss';

import configureStore from 'store/configureStore';

import App from 'app';

/*----------  Configuring Store  ----------*/
const store = configureStore();

/*----------  Wrapping redux Provider ----------*/
const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;
