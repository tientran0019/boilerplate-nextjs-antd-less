/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-02-14 16:37:58
*------------------------------------------------------- */

import cookie from 'react-cookies';

const mandatory = () => {
	throw new Error('Storage Missing parameter!');
};

export default class Storage {
	constructor(name = mandatory()) {
		this.name = name;
	}

	set value(value) {
		const expires = new Date();
		expires.setDate((new Date()).getDate() + 14);

		cookie.save(
			this.name,
			value,
			{
				path: '/',
				expires,
			},
		);
	}

	get value() {
		return cookie.load(this.name);
	}

	destroy = (next) => {
		cookie.remove(this.name, { path: '/' });
		if (typeof next === 'function') {
			next();
		}
	}
}
