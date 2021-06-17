/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:47:02
*------------------------------------------------------- */
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import dayjs from 'dayjs';

dayjs.locale('en');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);

dayjs.tz.setDefault('Asia/Ho_Chi_Minh');

export const FORMAT_DATE = 'YYYY/MM/DD';

export default dayjs;
