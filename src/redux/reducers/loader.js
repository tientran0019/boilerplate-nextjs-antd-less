/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-07 17:45:11
*------------------------------------------------------- */

import { REQUEST_ERROR } from 'src/redux/actions/types';

import { notification } from 'antd';

export const initialState = {
	sending: false,
};

const reducer =	 (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_LOADING':
			return { sending: !state.sending };
		case 'START_LOADING':
			return { sending: true };

		case 'STOP_LOADING':
			return { sending: false };
		case REQUEST_ERROR: {
			if (process.browser) {
				notification.error({
					message: 'Oops!',
					description: action?.payload?.message || action.payload,
				});
			}

			return { sending: false, error: action.payload };
		}
		default:
			return state;
	}
};

export default reducer;
