/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-06 01:03:01
*------------------------------------------------------- */

import { SINGLE_API } from 'src/redux/actions/types';
// import AuthStorage from 'src/utils/AuthStorage';

import applyURIFilter from 'src/utils/apply-url-filter';

export const MODEL_NAME = 'TESTS_COLLECTION';
export const MODEL_PLURAL = 'tests-collections';

export const create = async (payload = {}, next = f => f) => {
	return {
		type: SINGLE_API,
		payload: {
			url: `/${MODEL_PLURAL}`,
			payload,
			options: { method: 'POST' },
			next,
		},
	};
};

export const update = async (payload = {}, next = f => f) => {
	const { id, ...data } = payload;

	return {
		type: SINGLE_API,
		payload: {
			url: `/${MODEL_PLURAL}/${id}`,
			payload: data,
			options: { method: 'PATCH' },
			successType: 'UPDATE_' + MODEL_NAME + '_SUCCESS',
			next,
		},
	};
};

export const upsert = async (payload = {}, next = f => f) => {
	const { id, ...data } = payload;

	return {
		type: SINGLE_API,
		payload: {
			url: id ? `/${MODEL_PLURAL}/${id}` : `/${MODEL_PLURAL}`,
			payload: data,
			options: { method: id ? 'PATCH' : 'POST' },
			successType: id ? 'UPDATE_' + MODEL_NAME + '_SUCCESS' : '',
			next,
		},
	};
};

export const getOne = async (payload = {}, next) => {
	const { id, filter } = payload;

	return {
		type: SINGLE_API,
		payload: {
			url: `/${MODEL_PLURAL}/${id}${applyURIFilter(filter)}`,
			beforeCallType: 'GET_' + MODEL_NAME + '_DATA_REQUEST',
			successType: 'GET_' + MODEL_NAME + '_DATA_SUCCESS',
			next,
		},
	};
};

export const getList = async (payload = {}, next) => {
	const { filter, firstLoad } = payload;

	return {
		type: SINGLE_API,
		payload: {
			url: `/${MODEL_PLURAL}${applyURIFilter(filter)}`,
			beforeCallType: firstLoad ? 'GET_' + MODEL_NAME + '_LIST_REQUEST' : '',
			successType: 'GET_' + MODEL_NAME + '_LIST_SUCCESS',
			next,
		},
	};
};

export const remove = async (payload = {}, next = f => f) => {
	const { id } = payload;

	return {
		type: SINGLE_API,
		payload: {
			url: `/${MODEL_PLURAL}/${id}`,
			payload: id,
			options: { method: 'DELETE' },
			successType: 'DELETE_' + MODEL_NAME + '_SUCCESS',
			next,
		},
	};
};
