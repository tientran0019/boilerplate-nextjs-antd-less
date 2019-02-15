/*--------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2019-02-14 16:50:25
 *-------------------------------------------------------*/

import { fromJS } from 'immutable';

export const initialState = fromJS({});

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return fromJS(action.payload);

		case 'LOGIN_FAILED':
			return fromJS({ error: action.payload.message || action.payload });

		case 'LOGOUT_SUCCESS':
			return fromJS({});

		case 'GET_USER_AUTH_SUCCESS':
			return fromJS(action.payload);

		case 'UPDATE_PROFILE_SUCCESS': {
			return state.merge({
				...action.payload,
			});
		}

		default:
			return state;
	}
};
