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

import NProgress from 'nprogress';
import Router from 'next/router';

import MainLayout from 'src/components/MainLayout';

import 'src/theme/index.less';
import 'src/theme/custom.less';
import 'src/theme/styles.less';

// const Noop = ({ children }) => children;

Router.events.on('routeChangeStart', url => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
