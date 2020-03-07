/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-12-18 22:24:12
*------------------------------------------------------- */
import { notification } from 'antd';
import merge from 'lodash/merge';

import applyURIFilter from 'src/utils/apply-url-filter';

const mandatory = () => {
	return Promise.reject(new Error('Fetch API Missing parameter!'));
};

const API_URL = process.env.API_URL;

export default async ({ url, options, params } = mandatory(), cb = f => f) => {
	try {
		const defaultOptions = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		};

		const opts = merge(defaultOptions, options);

		// set token
		// if (AuthStorage.loggedIn) {
		// 	options.headers.Authorization = AuthStorage.token;
		// }

		let uri = API_URL + url;

		if (params && Object.keys(params).length > 0) {
			if (opts && opts.method === 'GET') {
				uri += applyURIFilter(params);
			} else {
				opts.body = JSON.stringify(params);
			}
		}

		if (process.env.NODE_ENV !== 'production') {
			console.log('Call API: url, options, params', uri, options, params);
		}

		const response = await fetch(uri, opts);
		const data = await response.json();

		cb(null, data);
		return data;
	} catch (err) {
		if (process.env.NODE_ENV !== 'production') {
			console.error('Call API Error: ', err);
		}

		notification.error({
			message: 'Error!',
			description: err.message || err.toString(),
		});
		cb(err);
		return Promise.reject(err);
	}
};
