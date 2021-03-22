/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-01 17:03:18
*------------------------------------------------------- */

import dayjs from 'src/utils/moment';

export default (date, format = 'MMMM D, YYYY') => {
	if (!date) {
		return '--';
	}

	return dayjs(date).format(format);
};
