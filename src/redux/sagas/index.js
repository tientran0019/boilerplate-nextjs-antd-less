/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2018-01-09 18:48:54
*------------------------------------------------------- */

import { fork } from 'redux-saga/effects';
import es6promise from 'es6-promise';

import auth from './auth.saga';
import middleware from './middleware.saga';

es6promise.polyfill();


export default function* rootSaga() {
	yield fork(middleware);

	// combine your saga here
	yield fork(auth);
}
