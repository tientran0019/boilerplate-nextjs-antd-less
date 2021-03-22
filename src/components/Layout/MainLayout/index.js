/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-01 17:38:42
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { BackTop } from 'antd';

import Header from 'src/components/Layout/Header';
import Footer from 'src/components/Layout/Footer';

import CookieAlert from 'src/components/CookieAlert';

// import classes from './style.less';

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const MainLayout = (props) => {
	const { children } = props;

	return (
		<div className="d-flex flex-column w-100 min-vh-100">
			<Header />
			<div className="flex-1">
				{children}
			</div>
			<Footer />
			<BackTop />
			<CookieAlert />
		</div>
	);
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

// MainLayout.getInitialProps = ({ store, isServer, pathname, query }) => {
// 	// store.dispatch({ type: 'FOO', payload: 'foo' }); // The component can read from the store's state when rendered
// 	return { custom: 'custom' }; // You can pass some custom props to the component from here
// };

export default MainLayout;
