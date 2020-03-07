/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-02-22 17:54:41
*------------------------------------------------------- */

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';

import MainLayout from 'src/components/MainLayout';

import 'src/theme/index.less';

// const Noop = ({ children }) => children;

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		const Layout = Component.Layout || MainLayout;

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	}
}
