import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from 'reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
	const store = createStore(
		userReducer,
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
