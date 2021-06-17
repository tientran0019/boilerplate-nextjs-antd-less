/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-09 16:09:14
*------------------------------------------------------- */

import Storage from './storage';

class CookieSettingsStorage extends Storage {
	get accepted() {
		return !!this.value && !!this.value.accepted;
	}

	set accepted(val) {
		this.value = { ...this.value, accepted: val };
	}
}

export default new CookieSettingsStorage('COOKIE_SETTINGS', { accepted: false });
