/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-02-14 16:53:00
*------------------------------------------------------- */

import { take, call, put, cancel, fork } from 'redux-saga/effects';

import fetchApi from 'src/utils/fetch.api.util';
import AuthStorage from 'src/utils/auth.storage.util';

import { REQUEST_ERROR } from 'src/redux/actions/type.action';

import { applyURIFilter } from 'src/utils';

const filter = {

};

function* authorize(payload, next, nextErr) {
	const response = yield call(fetchApi, {
		uri: '/users/login',
		params: payload,
		opt: { method: 'POST' },
		// loading: false,
	});
	if (response && !response.error) {
		const data = {
			token: response.id,
			userId: response.userId,
			role: response.role,
		};

		AuthStorage.value = data;

		yield put({
			type: 'LOGIN_SUCCESS',
			payload: response.user,
		});

		if (typeof next === 'function') {
			next();
		}
	} else {
		yield put({
			type: REQUEST_ERROR,
			payload: response.error,
		});
		if (typeof nextErr === 'function') {
			nextErr();
		}
	}
}

function* loginFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { payload, next, nextErr } = yield take('LOGIN_REQUEST');
		const authorizeTask = yield fork(authorize, payload, next, nextErr);
		const action = yield take(['LOGOUT_REQUEST', 'LOGIN_FAILED', REQUEST_ERROR]);

		if (action.type === 'LOGOUT_REQUEST') {
			yield cancel(authorizeTask);
		}
	}
}

function* logoutFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { next } = yield take('LOGOUT_REQUEST');

		yield call(fetchApi, {
			uri: '/users/logout',
			opt: { method: 'POST' },
		});

		yield call(AuthStorage.destroy);

		yield put({ type: 'LOGOUT_SUCCESS' });

		if (typeof next === 'function') {
			next();
		}
	}
}

function* loginFacebookFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { payload, next, nextErr } = yield take('LOGIN_FACEBOOK');

		const response = yield call(fetchApi, {
			uri: `/users/login-facebook?include=${JSON.stringify(filter)}`,
			params: payload,
			opt: { method: 'POST' },
		});
		if (response && !response.error) {
			const data = {
				token: response.id,
				userId: response.userId,
				role: response.role,
			};
			AuthStorage.value = data;

			yield put({
				type: 'LOGIN_SUCCESS',
				payload: response.user,
			});

			if (typeof next === 'function') {
				next();
			}
		} else {
			yield put({
				type: 'LOGIN_FAILED',
				payload: response.error,
			});
			if (typeof nextErr === 'function') {
				nextErr();
			}
		}
	}
}

function* getUserAuthFlow() {
	const INFINITE = true;

	while (INFINITE) {
		const { next, nextErr } = yield take('GET_USER_AUTH_REQUEST');

		const response = yield call(fetchApi, {
			uri: '/users/' + AuthStorage.userId + applyURIFilter(filter),
		});

		if (response && !response.error) {
			yield put({
				type: 'GET_USER_AUTH_SUCCESS',
				payload: response,
			});
			if (typeof next === 'function') {
				next(response);
			}
		} else {
			if (typeof nextErr === 'function') {
				nextErr(response.error);
			}
		}
	}
}

export default function* authFlow() {
	yield fork(loginFlow);
	yield fork(logoutFlow);
	yield fork(loginFacebookFlow);
	yield fork(getUserAuthFlow);
}
