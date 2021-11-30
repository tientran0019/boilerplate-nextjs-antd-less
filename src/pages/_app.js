/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-06-19 15:26:14
*------------------------------------------------------- */
import React from 'react';
// import App from 'next/app';
import Head from 'next/head';

import { useDispatch } from 'react-redux';
import cookie from 'react-cookies';

import { useAsync } from 'react-use';

import NProgress from 'nprogress';
import { useRouter } from 'next/router';

import MainLayout from 'src/components/Layout/MainLayout';
import Loading from 'src/components/Loading';

import wrapperStore from 'src/redux';

import { actionGetUserAuth } from 'src/redux/actions/auth';

import AuthStorage from 'src/utils/auth-storage';

require('src/styles/index.less');

const urlsIgnore = ['/forgot-password', '/login-first', '/login', '/sign-up', '/verify-email', '/reset-password'];

const MyApp = (props) => {
	const { Component, pageProps } = props;
	const [awaitLoading, setAwaitLoading] = React.useState(true);
	const router = useRouter();

	const dispatch = useDispatch();

	const Layout = Component.Layout || MainLayout;

	React.useEffect(() => {
		const handleRouteChange = (url, { shallow }) => {
			if (!shallow) {
				NProgress.start();
			}
		};

		router.events.on('routeChangeStart', handleRouteChange);
		router.events.on('routeChangeComplete', () => NProgress.done());
		router.events.on('routeChangeError', () => NProgress.done());

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
			router.events.off('routeChangeComplete', () => NProgress.done());
			router.events.off('routeChangeError', () => NProgress.done());
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useAsync(async () => {
		if (AuthStorage.loggedIn) {
			try {
				await dispatch(await actionGetUserAuth());
			} catch (error) {
				if ((error.status === 403 || error.status === 401) && error.code !== 'AUTHORIZATION_REQUIRED') {
					AuthStorage.destroy();
					dispatch({ type: 'LOGOUT_SUCCESS' });

					if (router.pathname !== '/login') {
						router.push('/login');
					}
				}
			}
			setAwaitLoading(false);
		} else {
			setAwaitLoading(false);
		}
	}, [AuthStorage.loggedIn]);

	useAsync(async () => {
		if (!AuthStorage.loggedIn && typeof window !== 'undefined' && !urlsIgnore.includes(router.pathname)) {
			router.push('/login');
		}
	}, [router.pathname]);

	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0" />
			</Head>
			<Component {...pageProps} router={router} />
			<Loading fullScreen loading={awaitLoading} />
		</Layout>
	);
};

MyApp.getInitialProps = async (context) => {
	const { ctx, Component } = context;

	if (!process.browser) {
		cookie.plugToRequest(ctx.req, ctx.res);
	}

	if (!AuthStorage.loggedIn && !urlsIgnore.includes(ctx.pathname)) {
		if (ctx.res) {
			ctx.res.writeHead(302, { Location: '/login' });
			ctx.res.end();
		}
	}

	if (AuthStorage.loggedIn && urlsIgnore.includes(ctx.pathname)) {
		if (ctx.res) {
			ctx.res.writeHead(302, { Location: '/' });
			ctx.res.end();
		}
	}

	// calls page's `getInitialProps` and fills `appProps.pageProps`
	let pageProps = {};

	if (Component?.getInitialProps) {
		pageProps = await Component?.getInitialProps(ctx);
	}

	const propsData = {
		...pageProps,
	};

	let layoutProps = {};

	if (Component?.Layout) {
		layoutProps = await Component?.Layout?.getInitialProps?.({
			...ctx,
			pageProps: propsData,
		});
	} else {
		layoutProps = await MainLayout?.getInitialProps?.({
			...ctx,
			pageProps: propsData,
		});
	}

	return {
		pageProps: {
			...propsData,
			...layoutProps,
		},
	};
};

export default wrapperStore.withRedux(MyApp);
