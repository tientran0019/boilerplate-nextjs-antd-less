/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-02-14 16:46:02
*------------------------------------------------------- */

import { SINGLE_API } from 'src/redux/actions/type.action';
import AuthStorage from 'src/utils/auth.storage.util';

import { applyURIFilter } from 'src/utils';

export const MODEL_NAME = 'USER';
export const MODEL_PLURAL = 'users';

export const create = (payload, next, nextError) => {
	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}`,
			params: payload,
			opt: { method: 'POST' },
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const update = (payload, next, nextError) => {
	const { id, ...answer } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}/${id}`,
			params: answer,
			opt: { method: 'PATCH' },
			successType: AuthStorage.userId === id ? 'UPDATE_PROFILE_SUCCESS' : 'UPDATE_' + MODEL_NAME + '_SUCCESS',
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const getOne = (payload = {}, next, nextError) => {
	const { id, filter } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}/${id}${applyURIFilter(filter)}`,
			beforeCallType: 'GET_' + MODEL_NAME + '_DATA_REQUEST',
			successType: 'GET_' + MODEL_NAME + '_DATA_SUCCESS',
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const getList = (payload = {}, next, nextError) => {
	const { filter, firstLoad } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}${applyURIFilter(filter)}`,
			beforeCallType: firstLoad ? 'GET_' + MODEL_NAME + '_LIST_REQUEST' : '',
			successType: 'GET_' + MODEL_NAME + '_LIST_SUCCESS',
			afterSuccess: next,
			afterError: nextError,
		},
	};
};

export const remove = (payload, next) => {
	const { id } = payload;

	return {
		type: SINGLE_API,
		payload: {
			uri: `/${MODEL_PLURAL}/${id}`,
			params: id,
			opt: { method: 'DELETE' },
			successType: 'DELETE_' + MODEL_NAME + '_SUCCESS',
			afterSuccess: next,
		},
	};
};
