/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2017-08-25 22:01:03
*------------------------------------------------------- */

import { SINGLE_API, CHAIN_API, PARALLEL_API } from 'src/redux/actions/types';

import fetchAPI from 'src/utils/fetch-api';

/* Normal action
*------------------------------------------------------- */

export const test = (payload, next) => async (dispatch, getState) => {
	const res = await fetchAPI({ url: `users/${payload.id}` });
	return dispatch({ type: 'GET_PROFILE_DATA_SUCCESS', payload: res });
};

/* SINGLE_API
*------------------------------------------------------- */
export const testSignApi = (payload, next = f => f) => {
	return {
		type: SINGLE_API,
		payload: {
			url: '/test',
			payload,
			options: { method: 'POST' },
			successType: 'SIGN_UP_SUCCESS',
			errorType: 'SIGN_UP_FAILED',
			next,
		},
	};
};

/* CHAIN_API
*------------------------------------------------------- */

// export function testChainApi(payload, next) {
// 	return {
// 		type: CHAIN_API,
// 		payload: {
// 			listApi: [
// 				() => ({
// 					method: 'POST',
// 					path: 'users',
// 					params: payload,
// 				}),
// 				(res) => ({
// 					method: 'POST',
// 					path: 'users/login',
// 					params: payload,
// 				}),
// 				(res) => ({
// 					method: 'GET',
// 					path: `users/${res[1].userData.id}`,
// 				}),
// 			],
// 			successType: 'LOGIN_SUCCESS',
// 			errorType: 'LOGIN_FAILED',
// 			afterSuccess: (response) => {
// 				const data = {
// 					token: response[1].id,
// 					userId: response[1].userId,
// 					loginType: response[1].userData.loginType,
// 				};

// 				if (typeof next === 'function') {
// 					next();
// 				}
// 			},
// 		},
// 	};
// }


// /* PARALLEL_API
// *------------------------------------------------------- */

// export function testParallelApi(payload, next) {
// 	return {
// 		type: PARALLEL_API,
// 		payload: {
// 			listApi: [
// 				() => ({
// 					method: 'POST',
// 					path: 'users',
// 					params: payload,
// 				}),
// 				() => ({
// 					method: 'POST',
// 					path: 'users/login',
// 					params: payload,
// 				}),
// 				() => ({
// 					method: 'GET',
// 					path: `users/${res[1].userData.id}`,
// 				}),
// 			],
// 			successType: 'LOGIN_SUCCESS',
// 			errorType: 'LOGIN_FAILED',
// 			afterSuccess: (response) => {
// 				const data = {
// 					token: response[1].id,
// 					userId: response[1].userId,
// 					loginType: response[1].userData.loginType,
// 				};

// 				if (typeof next === 'function') {
// 					next();
// 				}
// 			},
// 		},
// 	};
// }
