/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:51:30
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'src/components/Head';

import ChangePassword from 'src/containers/Auth/ChangePassword/';

const ChangePasswordPage = (props) => {
	// const { } = props;

	return (
		<>
			<Head title="Change Password" />
			<ChangePassword />
		</>
	);
};

ChangePasswordPage.propTypes = {
	// classes: PropTypes.object.isRequired,
};

ChangePasswordPage.defaultProps = {
	// classes: {},
};

export default ChangePasswordPage;
