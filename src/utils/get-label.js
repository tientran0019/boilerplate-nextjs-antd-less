/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-18 23:24:01
*------------------------------------------------------- */

const getLabel = (options = [], val) => {
	if (options.length === 0 || !val) {
		return '';
	}

	const option = options.find(el => {
		return el.value === val;
	});

	return option ? option.label : val;
};

export default getLabel;
