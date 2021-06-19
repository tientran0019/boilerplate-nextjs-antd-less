/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-07 10:09:53
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Head from 'src/components/Head';

import ForgotPassword from 'src/containers/Auth/ForgotPassword/';

const propTypes = {
	// router: PropTypes.object.isRequired,
};

const defaultProps = {
	// router: {},
};

const ForgotPasswordPage = (props) => {
	return (
		<>
			<Head title="Forgot Password" />
			<ForgotPassword />
		</>
	);
};

ForgotPasswordPage.propTypes = propTypes;

ForgotPasswordPage.defaultProps = defaultProps;

ForgotPasswordPage.Layout = ({ children }) => children;

// ForgotPasswordPage.getInitialProps = ({ store, isServer, pathname, query }) => {
// 	// store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
// 	return { custom: 'custom' }; // You can pass some custom props to the component from here
// };

export default ForgotPasswordPage;
// export default connect((state) => state)(LoginPage);
