/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-02-23 23:53:07
*------------------------------------------------------- */
import AuthStorage from 'src/utils/auth-storage';
import ModalLogin from 'src/components/ModalLogin/';

const checkLogin = async (next = f => f) => {
	if (AuthStorage.loggedIn) {
		await next();
	} else {
		ModalLogin.open({
			afterLogin: next,
		});
	}
};

export const loginRequired = async (next = f => f) => {
	if (AuthStorage.loggedIn) {
		await next();
	} else {
		ModalLogin.open({
			afterLogin: next,
			maskClosable: false,
		});
	}
};

export default checkLogin;
