/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-02-23 22:09:41
*------------------------------------------------------- */

// import React from 'react';
// import PropTypes from 'prop-types';

import handleOpen, { destroyFns } from './func';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const ModalLogin = (props) => {
	// const { } = props;

	return null;
};

ModalLogin.open = (props) => {
	return handleOpen({
		...props,
	});
};

ModalLogin.close = () => {
	while (destroyFns.length) {
		const close = destroyFns.pop();
		if (close) {
			close();
		}
	}
};

ModalLogin.destroyAll = () => {
	while (destroyFns.length) {
		const close = destroyFns.pop();
		if (close) {
			close();
		}
	}
};

ModalLogin.propTypes = propTypes;

ModalLogin.defaultProps = defaultProps;

export default ModalLogin;
