/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-01 17:03:18
*------------------------------------------------------- */

import queryString from 'query-string';

const buildUrl = (query, url = '') => {
	Object.keys(query).forEach((key) => (query[key] === '') && delete query[key]); // eslint-disable-line

	const link = queryString.stringifyUrl({ url, query });

	return link;
};
export default buildUrl;
