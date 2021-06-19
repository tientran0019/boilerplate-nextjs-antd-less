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

import Login from 'src/containers/Auth/Login/';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const LoginPage = (props) => {
	return (
		<>
			<Head title="Login" />
			<Login />
		</>
	);
};

LoginPage.propTypes = propTypes;

LoginPage.defaultProps = defaultProps;

LoginPage.Layout = ({ children }) => children;

// LoginPage.getInitialProps = ({ store, isServer, pathname, query }) => {
// 	// store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
// 	return { custom: 'custom' }; // You can pass some custom props to the component from here
// };

export default LoginPage;
// export default connect((state) => state)(LoginPage);
