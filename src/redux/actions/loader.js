/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-07 17:44:42
*------------------------------------------------------- */

export function toggleLoader() {
	return {
		type: 'TOGGLE_LOADING',
	};
}

export function startLoader() {
	return {
		type: 'START_LOADING',
	};
}

export function stopLoader() {
	return {
		type: 'STOP_LOADING',
	};
}
