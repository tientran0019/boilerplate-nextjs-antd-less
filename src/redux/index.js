/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-12 22:08:41
*------------------------------------------------------- */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';

import reducer, { initialState } from 'src/redux/reducers';
import apiMiddleware from 'src/redux/thunk/middleware';

const DEV = process.browser && process.env.NODE_ENV === 'development';

const bindMiddleware = middleware => {
	if (DEV) {
		const { createLogger } = require('redux-logger');

		const logger = createLogger({
			collapsed: (getState, action, logEntry) => !logEntry.error,
			// predicate: (getState, action) => !['@@redux-form/CHANGE', '@@redux-form/REGISTER_FIELD'].includes(action.type),
		});

		return applyMiddleware(...middleware, logger);
	}

	return applyMiddleware(...middleware);
};

const makeStore = () => {
	const store = createStore(
		reducer,
		initialState,
		bindMiddleware([apiMiddleware, thunk]),
	);
	return store;
};

export default createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });
