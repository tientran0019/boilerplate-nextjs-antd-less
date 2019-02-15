/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2018-01-10 22:17:54
*------------------------------------------------------- */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reduxReset from 'redux-reset';

import ENV from 'src/constants/env.constant';
import rootReducer, { initialState } from 'src/redux/reducers';
import rootSaga from 'src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
	// stateTransformer,
	collapsed: (getState, action, logEntry) => !logEntry.error,
	predicate: (getState, action) => !['@@redux-form/CHANGE', '@@redux-form/REGISTER_FIELD'].includes(action.type),
});

export default (state = initialState) => {
	const composeMiddleware = ENV === 'production' || !process.browser ?
		compose(
			applyMiddleware(sagaMiddleware),
			reduxReset({
				type: 'LOGOUT_SUCCESS',
				data: initialState,
			}),
		) :
		compose(
			applyMiddleware(sagaMiddleware),
			applyMiddleware(logger),
			reduxReset({
				type: 'LOGOUT_SUCCESS',
				data: initialState,
			}),
		);

	const store = createStore(
		combineReducers(rootReducer),
		state,
		composeMiddleware,
	);

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};
