export const isEmptyObject = (obj) => {
	for (const key in obj) { // eslint-disable-line
		return false;
	}
	return true;
};

export const isPlainObject = (obj) => {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

// About 1.5x faster than the two-arg version of Array#splice().
export const spliceOne = (list, index) => {
	for (let i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
		list[i] = list[k]; // eslint-disable-line
	}
	list.pop();
};

const applyURIFilter = (filter, name = 'filter') => {
	const flag = isPlainObject(filter) && !isEmptyObject(filter);
	return flag ? `?${name}=${encodeURI(JSON.stringify(filter))}` : '';
};

export default applyURIFilter;
