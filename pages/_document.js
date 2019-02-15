/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-02-14 17:08:13
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import Document, { Head, Main, NextScript } from 'next/document';

import { BRAND } from 'src/constants/parameters.constant';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		// Resolution order
		//
		// On the server:
		// 1. app.getInitialProps
		// 2. page.getInitialProps
		// 3. document.getInitialProps
		// 4. app.render
		// 5. page.render
		// 6. document.render
		//
		// On the server with error:
		// 1. document.getInitialProps
		// 2. app.render
		// 3. page.render
		// 4. document.render
		//
		// On the client
		// 1. app.getInitialProps
		// 2. page.getInitialProps
		// 3. app.render
		// 4. page.render

		// Render app and page and get the context of the page with collected side effects.
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html lang="en" dir="ltr">
				<title>{BRAND}</title>
				<Head>
					{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}

					<meta charSet="utf-8" />
					{/* PWA */}
					<link rel="manifest" href="/static/assets/manifest.json" />

					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />

					<meta name="application-name" content={BRAND} />
					<meta name="apple-mobile-web-app-title" content={BRAND} />

					{/* <meta name="apple-mobile-web-app-status-bar-style" content={'white-' + pageContext.theme.palette.primary[900]} /> */}
					<meta name="msapplication-starturl" content="/" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0" />

					{/* <meta name="msapplication-navbutton-color" content={pageContext.theme.palette.primary[900]} /> */}
					{/* <meta name="theme-color" content={pageContext.theme.palette.primary[900]} /> */}

					<link rel="shortcut icon" type="image/x-icon" sizes="512x512" href="/static/assets/favicon.ico" />
					<link rel="shortcut icon" href="/static/assets/favicon.ico" />

					<link rel="icon" type="image/png" sizes="512x512" href="/static/assets/icon/512x512.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/assets/icon/512x512.png" />

					<link rel="icon" type="image/png" sizes="192x192" href="/static/assets/icon/192x192.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/assets/icon/192x192.png" />

					<link rel="icon" type="image/png" sizes="144x144" href="/static/assets/icon/144x144.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/static/assets/icon/144x144.png" />

					<link rel="icon" type="image/png" sizes="96x96" href="/static/assets/icon/96x96.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="96x96" href="/static/assets/icon/96x96.png" />

					<link rel="icon" type="image/png" sizes="72x72" href="/static/assets/icon/72x72.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/assets/icon/72x72.png" />

					<link rel="icon" type="image/png" sizes="48x48" href="/static/assets/icon/48x48.png" />
					<link rel="apple-touch-icon" type="image/png" sizes="48x48" href="/static/assets/icon/48x48.png" />

					{/* END PWA */}
				</Head>
				<body>
					<audio id="noti-sound">
						<track kind="captions" />
						<source src="/static/assets/media/noti-sound/light.ogg" type="audio/ogg" />
						<source src="/static/assets/media/noti-sound/light.mp3" type="audio/mpeg" />
					</audio>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
