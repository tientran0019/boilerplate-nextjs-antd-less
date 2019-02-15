/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-02-14 16:51:51
*------------------------------------------------------- */
import auth, { initialState as initialAuth } from './auth.reducer';
import loading, { initialState as initialLoading } from './loading.reducer';

import user, { initialState as initialUser } from './user.reducer';

export const initialState = {
	auth: initialAuth,
	loading: initialLoading,
	user: initialUser,
};

export default {
	auth,
	loading,
	user,
};
