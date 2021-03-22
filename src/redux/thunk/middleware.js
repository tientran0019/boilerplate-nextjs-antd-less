/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-12 22:08:37
*------------------------------------------------------- */

// import async from 'neo-async';
import fetchAPI from 'src/utils/fetch-api';

import { SINGLE_API/* , CHAIN_API, PARALLEL_API, REQUEST_ERROR */ } from 'src/redux/actions/types';

const mandatory = () => {
	throw new Error('Missing parameter!');
};

const singleApi = async (dataApi = mandatory(), dispatch) => {
	const { url = mandatory(), options, payload = {}, beforeCallType, successType, errorType, next = f => f } = dataApi;

	try {
		dispatch({ type: 'START_LOADING' });

		if (beforeCallType) {
			dispatch({ type: beforeCallType });
		}

		const response = await fetchAPI({
			url,
			options,
			payload,
			dispatch,
		});

		next(null, response);

		if (successType) {
			dispatch({ type: successType, payload: response });
		}

		return response;
	} catch (error) {
		next(error);

		if (errorType) {
			dispatch({ type: errorType, payload: error });
		}

		// dispatch({ type: REQUEST_ERROR, payload: error });
		throw error;
	}
};

// const chainApi = (dataApi = mandatory(), dispatch) => {
// 	if (!dataApi.listApi) {
// 		return mandatory();
// 	}

// 	dispatch({ type: 'START_LOADING' });
// 	const { beforeCallType, successType, errorType, afterSuccess, afterError } = dataApi;

// 	if (beforeCallType) {
// 		dispatch({ type: beforeCallType });
// 	}

// 	const iterator = (result, api, done) => {
// 		const { path = mandatory(), method, params = {}, uploadImg = false } = api(result);
// 		fetchAPI(path, { method }, params, uploadImg)
// 			.then(response => {
// 				if (response.error) {
// 					done(response.error);
// 				} else {
// 					result.push(response);
// 					done(null, result);
// 				}
// 			}).catch(err => {
// 				dispatch({ type: REQUEST_ERROR, payload: err.message || err.error || err });
// 			});
// 	};

// 	async.reduce(dataApi.listApi, [], iterator, (err, res) => {
// 		if (err) {
// 			if (typeof afterError === 'function') {
// 				afterError(err, dispatch);
// 			}
// 			if (errorType) {
// 				dispatch({ type: errorType, payload: err });
// 			}

// 			dispatch({ type: REQUEST_ERROR, payload: err.message || err.error || err });
// 		} else {
// 			if (typeof afterSuccess === 'function') {
// 				afterSuccess(res, dispatch);
// 			}
// 			if (successType) {
// 				dispatch({ type: successType, payload: res[res.length - 1] });
// 			}
// 		}

// 		dispatch({ type: 'STOP_LOADING' });
// 	});
// };

// const parallelApi = (dataApi, dispatch) => {
// 	if (!dataApi.listApi) {
// 		return mandatory();
// 	}

// 	dispatch({ type: 'START_LOADING' });
// 	const { beforeCallType, successType, errorType, afterSuccess, afterError } = dataApi;

// 	if (beforeCallType) {
// 		dispatch({ type: beforeCallType });
// 	}

// 	const iterator = (api, done) => {
// 		const { path = mandatory(), method, params = {}, uploadImg = false } = api();
// 		fetchAPI(path, { method }, params, uploadImg)
// 			.then(response => {
// 				if (response.error) {
// 					done(response.error);
// 				} else {
// 					done(null, response);
// 				}
// 			}).catch(err => {
// 				dispatch({ type: REQUEST_ERROR, payload: err.message || err.error || err });
// 			});
// 	};

// 	async.mapLimit(dataApi.listApi, 5, iterator, (err, res) => {
// 		if (err) {
// 			if (typeof afterError === 'function') {
// 				afterError(err, dispatch);
// 			}
// 			if (errorType) {
// 				dispatch({ type: errorType, payload: err });
// 			}

// 			dispatch({ type: REQUEST_ERROR, payload: err.message || err.error || err });
// 		} else {
// 			if (typeof afterSuccess === 'function') {
// 				afterSuccess(res, dispatch);
// 			}
// 			if (successType) {
// 				dispatch({ type: successType, payload: res });
// 			}
// 		}

// 		dispatch({ type: 'STOP_LOADING' });
// 	});
// };

const middleware = ({ dispatch/* , getState */ }) => next => action => {
	switch (action.type) {
		case SINGLE_API:
			return singleApi(action.payload, dispatch);

	// case CHAIN_API:
	// 	return chainApi(action.payload, dispatch);

	// case PARALLEL_API:
	// 	return parallelApi(action.payload, dispatch);

		default:
			return next(action);
	}
};

export default middleware;
