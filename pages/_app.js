/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-02-14 17:07:54
*------------------------------------------------------- */

import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import NProgress from 'nprogress';
import { PageTransition } from 'next-page-transitions';
import cookie from 'react-cookies';

import Router from 'next/router';

import createStore from 'src/redux/store';

import AuthStorage from 'src/utils/auth.storage.util';

import { getUserAuth } from 'src/redux/actions/auth.action';


Router.onRouteChangeStart = (/* url */) => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const TIMEOUT = 300;

@withRedux(createStore)
@withReduxSaga
export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		if (!process.browser) {
			await cookie.plugToRequest(ctx.req, ctx.res);
		}

		if (AuthStorage.loggedIn && !ctx.store.getState().auth.get('id')) {
			await ctx.store.dispatch(getUserAuth());
		}

		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};

		return { pageProps };
	}

	async componentDidMount() {
		// run only once when refresh browser
		if (AuthStorage.loggedIn && !this.props.store.getState().auth.get('id')) {
			await this.props.store.dispatch(getUserAuth());
		}
	}

	render() {
		const { Component, store, pageProps } = this.props;

		return (
			<Container>
				<PageTransition
					timeout={TIMEOUT}
					classNames="page-transition"
					loadingDelay={100}
					loadingTimeout={{
						enter: TIMEOUT,
						exit: 0,
					}}
					loadingClassNames="loading-indicator"
				>
					<Provider store={store}>
						{/* Pass pageContext to the _document though the renderPage enhancer to render collected styles on server side. */}
						<Component {...pageProps} />
					</Provider>
				</PageTransition>
				<style jsx global>{`
					.page-transition-enter {
						opacity: 0;
						transform: translate3d(0, 20px, 0);
					}
					.page-transition-enter-active {
						opacity: 1;
						transform: translate3d(0, 0, 0);
						transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
					}
					.page-transition-exit {
						opacity: 1;
					}
					.page-transition-exit-active {
						opacity: 0;
						transition: opacity ${TIMEOUT}ms;
					}
					.loading-indicator-appear,
					.loading-indicator-enter {
						opacity: 0;
					}
					.loading-indicator-appear-active,
					.loading-indicator-enter-active {
						opacity: 1;
						transition: opacity ${TIMEOUT}ms;
					}
				`}
				</style>
			</Container>
		);
	}
}
