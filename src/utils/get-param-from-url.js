/* eslint-disable no-useless-escape */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-07-30 17:47:47
*------------------------------------------------------- */

export default (param = 'id', url = window.location.href) => {
	const name = param.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');

	const regexS = '[\\?&]' + name + '=([^&#]*)';
	const regex = new RegExp(regexS);
	const results = regex.exec(url);
	return results == null ? null : results[1];
};
