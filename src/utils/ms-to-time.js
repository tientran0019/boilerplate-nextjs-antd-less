/* eslint-disable no-param-reassign */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-03-01 12:35:42
*------------------------------------------------------- */
const msToTime = (s = 0) => {
	// Pad to 2 or 3 digits, default is 2
	function pad(n, z) {
		z = z || 2;
		return ('00' + n).slice(-z);
	}

	const ms = s % 1000;
	s = (s - ms) / 1000;
	const secs = s % 60;
	s = (s - secs) / 60;
	const mins = s % 60;
	const hrs = (s - mins) / 60;

	if (hrs === 0) {
		return pad(mins) + ':' + pad(secs);
	}
	return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
};

export default msToTime;
