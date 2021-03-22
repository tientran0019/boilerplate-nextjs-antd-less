/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-09 16:09:14
*------------------------------------------------------- */

import Storage from './storage';

class AuthStorage extends Storage {
	get loggedIn() {
		return !!this.value && !!this.value.token;
	}

	get token() {
		return this.value && this.value.token;
	}

	get userId() {
		return this.value && this.value.userId;
	}

	get role() {
		return this.value && this.value.role;
	}
}

export default new AuthStorage('AUTH');
