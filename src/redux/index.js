/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-10-19 09:44:11
*------------------------------------------------------- */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
// import { setupInterceptors } from 'src/utils/fetch-api';

import reducer, { initialState, whitelist } from 'src/redux/reducers';
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
	if (!process.browser) {
		// If it's on server side, create a store
		const store = createStore(
			reducer,
			initialState,
			bindMiddleware([apiMiddleware, thunk]),
		);
		return store;
	}

	// If it's on client side, create a store which will persist
	const { persistStore, persistReducer } = require('redux-persist');
	const storage = require('redux-persist/lib/storage').default;

	const persistConfig = {
		key: 'root',
		whitelist, // only counter will be persisted, add other reducers if needed
		storage, // if needed, use a safer storage
	};

	const persistedReducer = persistReducer(persistConfig, reducer); // Create a new reducer with our existing reducer

	const store = createStore(
		persistedReducer,
		initialState,
		bindMiddleware([apiMiddleware, thunk]),
	); // Creating the store again

	store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

	// setupInterceptors(store);

	return store;
};

const redux = createWrapper(makeStore, { debug: process.env.NODE_ENV === 'development' });

export default redux;
