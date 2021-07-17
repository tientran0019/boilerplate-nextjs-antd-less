/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-27 22:09:57
*------------------------------------------------------- */

/**
 * Handle the exp errors.
 *
 * @param {Function} tryFunc Function to handle.
 * @param {string} [message] Optional forced error message.
 */
const handleError = (tryFunc, message = null) => {
	let result = null;

	try {
		result = tryFunc();
	} catch (e) {
		if (e instanceof Error) {
			// renderError(message || e.message);
		} else {
			// renderError("Something went wrong");
		}
	}

	return result;
};

export default handleError;
