/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-09 15:59:55
*------------------------------------------------------- */

import cookie from 'react-cookies';

const mandatory = () => {
	throw new Error('Storage Missing parameter!');
};

export default class Storage {
	#name;

	#options = {};

	constructor(name = mandatory(), value = {}, options = {}) {
		this.#name = name;
		this.#options = options;

		if (!this.value) {
			this.value = value;
		}
	}

	set value(value) {
		cookie.save(
			this.#name,
			value,
			{
				path: '/',
				maxAge: 365 * 24 * 60 * 60,
				...this.#options,
			},
		);
	}

	get value() {
		return cookie.load(this.#name);
	}

	// eslint-disable-next-line class-methods-use-this
	get allCookies() {
		return cookie.loadAll();
	}

	destroy = (next = f => f) => {
		cookie.remove(
			this.#name,
			{
				path: '/',
				maxAge: 365 * 24 * 60 * 60,
				...this.#options,
			},
		);
		next();
	}
}
